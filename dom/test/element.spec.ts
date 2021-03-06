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

import { createContext } from './common'
import { DIV } from '../src/html'
import { MakeLifecycle } from '../src/lifecycle'

describe('dom_element', () => {
  it('static empty-element', () => {
    const ctx = createContext()
    const nodeUndefined = DIV().build().render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('static nested-element', () => {
    const ctx = createContext()
    const nodeUndefined = DIV($ => $.A($ => $.SPAN($ => $.text('abc'))))
      .build()
      .render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div><a><span>abc</span></a></div>')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('static attribute', () => {
    const ctx = createContext()
    const node = DIV($ => $.id('main'))
      .build()
      .render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div id="main"></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic attribute', () => {
    const ctx = createContext()
    const node = DIV<string, unknown, unknown>($ =>
      $.id((v: string) => (v !== 'X' ? v : undefined))
    )
      .build()
      .render(ctx, 'abc')
    expect(ctx.doc.body.innerHTML).toEqual('<div id="abc"></div>')
    node.change('xyz')
    expect(ctx.doc.body.innerHTML).toEqual('<div id="xyz"></div>')
    node.change('X')
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    node.change((undefined as unknown) as string)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic child', () => {
    const ctx = createContext()
    const node = DIV<string, unknown, unknown>($ =>
      $.id((v: string) => v).A($ => $.href((v: string) => v && `#${v}`))
    )
      .build()
      .render(ctx, 'abc')
    expect(ctx.doc.body.innerHTML).toEqual(
      '<div id="abc"><a href="#abc"></a></div>'
    )
    node.change('xyz')
    expect(ctx.doc.body.innerHTML).toEqual(
      '<div id="xyz"><a href="#xyz"></a></div>'
    )
    node.change((undefined as unknown) as string)
    expect(ctx.doc.body.innerHTML).toEqual('<div><a></a></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('static $style', () => {
    const ctx = createContext()
    const node = DIV<number, unknown, unknown>($ => $.styles({ color: 'red' }))
      .build()
      .render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div style="color: red;"></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic $style', () => {
    const ctx = createContext()
    const node = DIV<number | undefined, unknown, unknown>($ =>
      $.style('color', v => (v && (v === 1 ? 'red' : 'blue')) || undefined)
    )
      .build()
      .render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div style="color: red;"></div>')
    node.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div style="color: blue;"></div>')
    node.change(undefined)
    expect(ctx.doc.body.innerHTML).toEqual('<div style=""></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('event that dispatch', () => {
    const ctx = createContext((c: number) => {
      count += c
    })
    let count = 0
    const click = (state: number, e: Event, el: Element) => 1
    const node = DIV<number, number, unknown>($ => $.onClick(click))
      .build()
      .render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(1)
    domEl.click()
    expect(count).toEqual(2)
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it("handle event that doesn't dispatch", () => {
    const ctx = createContext((c: number) => {
      count = c
    })
    let count = 0
    const click = () => undefined
    const node = DIV<number, number, unknown>($ => $.onClick(click))
      .build()
      .render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(0)
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('handle event that dispatch', () => {
    const ctx = createContext((c: number) => {
      count = c
    })
    let count = 0
    const click = (state: number, e: Event, el: HTMLElement) => state + 1
    const node = DIV<number, number, unknown>($ => $.onClick(click))
      .build()
      .render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(2)
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('handle event conditionally on state', () => {
    const ctx = createContext((c: number) => {
      count = c
    })
    let count = 0
    const click = (state: number, e: Event, el: Element) => state + 1
    const node = DIV<number, number, unknown>($ => $.onClick(click))
      .build()
      .render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(2)
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('event that does not dispatch', () => {
    const ctx = createContext((c: number) => {
      count = c
    })
    let count = 0
    const click = () => undefined
    const node = DIV<number, number, unknown>($ => $.onClick(click))
      .build()
      .render(ctx, 1)
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(0)
    node.destroy()
  })

  it('generated elements', () => {
    const template = DIV($ =>
      $.SPAN($ => $.text('hello ').A($ => $.href('#you').text(s => `#${s}`)))
    ).build()
    const ctx = createContext()
    template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual(
      '<div><span>hello <a href="#you">#1</a></span></div>'
    )
  })

  it('generated elements with style', () => {
    const template = DIV($ =>
      $.style('background-color', 'rgb(200, 200, 200)').text('hello')
    ).build()
    const ctx = createContext()
    template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual(
      '<div style="background-color: rgb(200, 200, 200);">hello</div>'
    )
  })

  it('respect lifecycle sequence', () => {
    const ctx = createContext()
    const sequence = [] as string[]
    const makeLifecycle: MakeLifecycle<string, unknown> = () => {
      sequence.push('afterrender')
      return {
        afterChange: () => sequence.push('afterchange'),
        beforeChange: () => sequence.push('beforechange'),
        beforeDestroy: () => sequence.push('beforedestroy')
      }
    }
    const template = DIV<string, unknown, unknown>($ =>
      $.Lifecycle(makeLifecycle)
    ).build()
    const view = template.render(ctx, 'A')
    expect(sequence).toEqual(['afterrender'])
    view.change('B')
    expect(sequence).toEqual(['afterrender', 'beforechange', 'afterchange'])
    view.destroy()
    expect(sequence).toEqual([
      'afterrender',
      'beforechange',
      'afterchange',
      'beforedestroy'
    ])
  })

  it('respect lifecycle sequence with derived', () => {
    const ctx = createContext()
    const sequence = [] as string[]
    const makeLifecycle: MakeLifecycle<string, unknown> = (
      state: string,
      el: HTMLElement
    ) => {
      expect(ctx).not.toBeUndefined()
      sequence.push(`AR:${state}:${el.tagName}`)
      let collect = 1
      return {
        afterChange: state => {
          expect(collect).toBe(2)
          expect(ctx).not.toBeUndefined()
          sequence.push(`AC:${state}:${el.tagName}`)
          collect = 3
        },
        beforeChange: state => {
          expect(collect).toBe(1)
          expect(ctx).not.toBeUndefined()
          sequence.push(`BC:${state}:${el.tagName}`)
          collect = 2
        },
        beforeDestroy: () => {
          expect(collect).toBe(3)
          expect(ctx).not.toBeUndefined()
          sequence.push('BD')
          sequence.push(String(el !== undefined))
        }
      }
    }
    const template = DIV<string, unknown, number>($ =>
      $.Lifecycle(makeLifecycle)
    ).build()
    const view = template.render(ctx, 'A')
    expect(sequence).toEqual(['AR:A:DIV'])
    view.change('B')
    expect(sequence).toEqual(['AR:A:DIV', 'BC:B:DIV', 'AC:B:DIV'])
    view.destroy()
    expect(sequence).toEqual(['AR:A:DIV', 'BC:B:DIV', 'AC:B:DIV', 'BD', 'true'])
  })
})
