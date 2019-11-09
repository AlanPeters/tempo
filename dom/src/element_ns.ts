import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { processAttribute, Acc, filterDynamics, domChildToTemplate } from './utils/dom'
import { DOMDynamicNodeView, DOMStaticNodeView } from './utils/node_view'
import { DOMAttribute } from './value'
import { prepareAttributes, maybeApplyMood, applyMood } from './element'
import { View } from '@mood/core/lib/view'
import { MoodAttributes } from './mood_attributes'
import { DOMAttributes } from './web_attributes'

export class DOMElementNS<State, Action, El> implements DOMTemplate<State, Action> {
  constructor(
    readonly ns: string,
    readonly name: string,
    readonly attributes: DOMAttributes<State, Action, El>,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State> {
    type AttributeName = keyof (typeof attributes)
    const el = ctx.doc.createElementNS(this.ns, this.name)

    const { attributes, afterRender, beforeChange, afterChange, beforeDestroy } = prepareAttributes(this.attributes)

    const keys = Object.keys(attributes) as AttributeName[]

    const { statics, dynamics } = keys.reduce(
      (acc: Acc<State>, key: AttributeName) =>
        processAttribute(el, key, attributes[key] as DOMAttribute<State, any>, ctx.dispatch, acc),
      { statics: [], dynamics: [] }
    )

    // apply attributes
    statics.forEach(f => f())
    dynamics.forEach(f => f(state))

    // TODO append before or after children?
    ctx.append(el)

    // children
    const appendChild = (n: Node) => el.appendChild(n)
    const views = this.children.map(child => child.render(ctx.withAppend(appendChild).withParent(el), state))

    maybeApplyMood(el, afterRender)(state)

    const dynamicChildren = filterDynamics(views).map(child => (state: State) => child.change(state))

    const allDynamics = dynamics.concat(dynamicChildren)

    if (beforeChange) {
      allDynamics.unshift(applyMood(el, beforeChange))
    }

    if (afterChange) {
      allDynamics.push(applyMood(el, afterChange))
    }

    if (allDynamics.length > 0) {
      return new DOMDynamicNodeView(el, views, (state: State) => allDynamics.forEach(f => f(state)), beforeDestroy)
    } else {
      return new DOMStaticNodeView(el, views, beforeDestroy)
    }
  }
}

export const defaultNamespaces: Record<string, string> = {
  'svg': 'http://www.w3.org/2000/svg'
}

export const elNS = <State, Action, El>(
  ns: string,
  name: string,
  attributes: Record<string, DOMAttribute<State, Action>> & MoodAttributes<State, El>,
  ...children: DOMChild<State, Action>[]
) => {
  const namespace = defaultNamespaces[ns] || ns
  return new DOMElementNS<State, Action, El>(namespace, name, attributes, children.map(domChildToTemplate))
}