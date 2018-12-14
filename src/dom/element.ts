import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { View } from '../core/view'
import { DOMAttributes } from './attributes'
import { Acc, processAttribute, filterDynamics, domChildToTemplate } from './utils'
import { DOMDynamicNodeView, DOMStaticNodeView } from './node_view'
import { DOMAttribute } from './value'

export class DOMElement<State, Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly name: string,
    readonly attributes: DOMAttributes<State, Action>,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext, state: State, dispatch: (action: Action) => void): View<State> {
    type AttributeName = keyof (typeof attributes)
    const el = ctx.doc.createElement(this.name)
    const attributes = this.attributes
    const keys = Object.keys(attributes) as AttributeName[]

    const { statics, dynamics } = keys.reduce(
      (acc: Acc<State>, key: AttributeName) =>
        processAttribute(el, key, attributes[key] as DOMAttribute<State, any>, dispatch, acc),
      { statics: [], dynamics: [] }
    )

    // apply attributes
    statics.forEach(f => f())
    dynamics.forEach(f => f(state))

    // TODO append before or after children
    ctx.append(el)

    // children
    const appendChild = (n: Node) => el.appendChild(n)
    const viewdChildren = this.children.map(child =>
      child.render({ ...ctx, parent: el, append: appendChild }, state, dispatch)
    )
    const dynamicChildren = filterDynamics(viewdChildren).map(child => (state: State) => child.change(state))
    const allDynamics = dynamics.concat(dynamicChildren)
    if (allDynamics.length > 0) {
      return new DOMDynamicNodeView(el, viewdChildren, (state: State) => allDynamics.forEach(f => f(state)))
    } else {
      return new DOMStaticNodeView(el, viewdChildren)
    }
  }
}

export const el = <State, Action>(
  name: string,
  attributes: DOMAttributes<State, Action>,
  ...children: DOMChild<State, Action>[]
) => {
  return new DOMElement<State, Action>(name, attributes, children.map(domChildToTemplate))
}