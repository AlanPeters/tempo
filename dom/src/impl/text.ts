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
import { DerivedValue } from 'tempo-core/lib/value'
import { removeNode } from './dom'
import { DOMTemplate } from '../template'
import { DOMContext } from '../context'
import { TextValue } from '../value'

class DerivedTextTemplate<State, Action, Query>
  implements DOMTemplate<State, Action, Query> {
  constructor(readonly makeContent: DerivedValue<State, string>) {}

  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    const { makeContent } = this
    let content = makeContent(state) || ''
    const node = ctx.doc.createTextNode(content)
    ctx.append(node)
    return {
      change(state: State) {
        const newContent = makeContent(state) || ''
        if (newContent !== content) {
          node.nodeValue = newContent
          if (newContent.length < 5000) content = newContent
        }
      },
      destroy() {
        removeNode(node)
      },
      request(_: Query) {}
    }
  }
}

class LiteralTextTemplate<State, Action, Query>
  implements DOMTemplate<State, Action, Query> {
  constructor(readonly content: string) {}
  render(ctx: DOMContext<Action>, _: State): View<State, Query> {
    const node = ctx.doc.createTextNode(this.content)
    ctx.append(node)
    return {
      change(_: State) {},
      destroy() {
        removeNode(node)
      },
      request(_: Query) {}
    }
  }
}

export function text<State, Action, Query = unknown>(
  content: TextValue<State>
): DOMTemplate<State, Action, Query> {
  if (typeof content === 'function') {
    return new DerivedTextTemplate<State, Action, Query>(
      content as DerivedValue<State, string>
    )
  } else {
    return new LiteralTextTemplate<State, Action, Query>(content || '')
  }
}
