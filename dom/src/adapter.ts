/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { View } from 'tempo-core/lib/view'
import { Component } from './component'
import { DOMTemplate } from './template'
import { DOMContext } from './context'

class AdapterTemplate<OuterState, InnerState, OuterAction, InnerAction, Query>
  implements DOMTemplate<OuterState, OuterAction, Query> {
  constructor(
    readonly mergeStates: (outerState: OuterState, innerState: InnerState) => InnerState | undefined,
    readonly propagate: (args: PropagateArg<OuterState, InnerState, OuterAction, InnerAction>) => void,
    readonly child: Component<InnerState, InnerAction, Query>
  ) {}

  render(ctx: DOMContext<OuterAction>, outerState: OuterState): View<OuterState, Query> {
    const mergedState =
      (this.mergeStates && this.mergeStates(outerState, this.child.store.property.get())) ||
      this.child.store.property.get()

    const viewComponent = this.child.render(
      ctx.withDispatch(() => { /* COMPONENT IS DETACHED FROM CONTAINER AND DOESN'T PROPAGATE */ }),
      mergedState
    )

    this.child.store.observable.on((state: InnerState, action: InnerAction) => {
      this.propagate({
        action,
        innerState: state,
        outerState,
        dispatchInner: (action: InnerAction) => this.child.store.process(action),
        dispatchOuter: ctx.dispatch
      })
    })

    return {
      change: (state: OuterState) => {
        const newState = this.mergeStates(state, this.child.store.property.get())
        if (typeof newState !== 'undefined')
          viewComponent.change(newState)
      },
      destroy: () => {
        viewComponent.destroy()
      },
      request: (query: Query) => {
        viewComponent.request(query)
      }
    }
  }
}

export interface PropagateArg<OuterState, InnerState, OuterAction, InnerAction> {
  action: InnerAction
  innerState: InnerState
  outerState: OuterState
  dispatchInner: (action: InnerAction) => void
  dispatchOuter: (action: OuterAction) => void
}

export function adapter<OuterState, InnerState, OuterAction, InnerAction, Query = unknown>(
  props: {
    mergeStates?: (outerState: OuterState, innerState: InnerState) => InnerState | undefined
    propagate?: (args: PropagateArg<OuterState, InnerState, OuterAction, InnerAction>) => void
  },
  child: Component<InnerState, InnerAction, Query>
): DOMTemplate<OuterState, OuterAction, Query> {
  return new AdapterTemplate(
    props.mergeStates || ((_u: OuterState, _d: InnerState) => undefined),
    /* istanbul ignore next */
    props.propagate || (() => undefined),
    child
  )
}
