import { View, DynamicView } from '../core/view'
import { DOMAttribute, DOMEvent, DOMProperty } from './dom_value'
import { attributeNameMap, attributeMap } from './attributes_mapper'
import { setEvent, setAttribute, setOneStyle } from './set_attribute'
import { UnwrappedDerivedValue, WrappedDerivedValue } from '../core/value'

export const removeNode = (node: Node) => {
  if (node && node.parentElement) {
    node.parentElement.removeChild(node)
  }
}

export const filterDynamics = <State>(children: View<State>[]): DynamicView<State>[] =>
  children.filter(child => child.kind === 'dynamic').map(child => child as DynamicView<State>)

export type Acc<State> = {
  statics: (() => void)[]
  dynamics: ((state: State) => void)[]
}

export const processAttribute = <State, Action>(
  el: HTMLElement,
  name: string,
  value: DOMAttribute<State, Action> | DOMEvent<State, Action> | DOMProperty<State, Action>,
  dispatch: (action: Action) => void,
  acc: Acc<State>
): Acc<State> => {
  name = attributeNameMap[name as keyof (typeof attributeNameMap)] || name

  let set: (el: HTMLElement, name: string, value: any) => void
  let isEvent = name.startsWith('on')
  if (isEvent) {
    // events
    set = setEvent(dispatch)
  } else if (name.startsWith('$')) {
    // pseudo-styles
    name = name.substring(1)
    set = setOneStyle
  } else {
    // other attributes/properties
    set = attributeMap[name] || setAttribute
  }

  const anyValue = value as any
  if (anyValue.kind && anyValue.kind === 'derived') {
    const derived = anyValue as WrappedDerivedValue<State, Action>
    const f = (state: State) => set(el, name, derived.resolve(state))
    return {
      dynamics: acc.dynamics.concat([f]),
      statics: acc.statics
    }
  } else if (!isEvent && typeof value === 'function') {
    const f = (state: State) => set(el, name, (value as UnwrappedDerivedValue<State, Action>)(state))
    return {
      dynamics: acc.dynamics.concat([f]),
      statics: acc.statics
    }
  } else {
    const f = () => set(el, name, value)
    return {
      dynamics: acc.dynamics,
      statics: acc.statics.concat([f])
    }
  }
}
