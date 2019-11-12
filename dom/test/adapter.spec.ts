import { createContext } from './common'
import { div } from '../src/html'
import { adapter, PropagateArg } from '../src/adapter'
import { component } from '../src/component'
import { Store } from '@mood/store/lib/store'

describe('adapter', () => {
  it('noOptions', () => {
    type InnerState = { inner: string; outer: string }

    const ctx = createContext(() => {})
    const store = Store.ofState({
      state: { inner: 'in', outer: 'out' },
      reducer: (state: InnerState) => {
        return state
      }
    })

    const template = adapter(
      {},
      component(
        { store },
        'inner: ',
        s => s.inner,
        ', outer: ',
        s => s.outer
      )
    )
    const view = template.render(ctx, { outer: 'out' })
    expect(ctx.doc.body.innerHTML).toEqual('inner: in, outer: out')
    view.change({ outer: 'OUT' })
    expect(ctx.doc.body.innerHTML).toEqual('inner: in, outer: out')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('mergeStates', () => {
    type OuterState = { outer: string }
    type InnerState = { inner: string; outer: string }

    const ctx = createContext(() => {})
    const store = Store.ofState({
      state: { inner: 'in', outer: '' },
      reducer: (state: InnerState) => {
        return state
      }
    })
    const template = adapter(
      {
        mergeStates: (outer: OuterState, inner: InnerState) => {
          return { ...outer, inner: inner.inner }
        }
      },
      component(
        { store },
        'inner: ',
        s => s.inner,
        ', outer: ',
        s => s.outer
      )
    )
    const view = template.render(ctx, { outer: 'out' })
    expect(ctx.doc.body.innerHTML).toEqual('inner: in, outer: out')
    view.change({ outer: 'OUT' })
    expect(ctx.doc.body.innerHTML).toEqual('inner: in, outer: OUT')
  })

  // TODO this test is almost impossible to follow and understand
  it('propagate', () => {
    const state = ['inner-state'] as string[]
    const store = Store.ofState<string[], string>({
      state,
      reducer: (s, a) => {
        if (a === 'inner-action') {
          didCallInnerDispatcher = true
          return s.concat([a])
        } else {
          return s.concat([a])
        }
      }
    })

    const comp = component(
      { store },
      div<string[], string>(
        { events: { click:  (_: MouseEvent) => 'click' } },
        s => s.join(', ')
      )
    )

    let didCallPropagate = false
    let didCallOuterDispatcher = false
    let didCallInnerDispatcher = false

    const propagate = (args: PropagateArg<string, string[], string, string>) => {
      // dispatch it only once
      if (args.action === 'click') {
        didCallPropagate = true
        expect(args.innerState).toEqual(['inner-state', 'outer-state', 'click'])
        args.dispatchInner('inner-action')
      } else if (args.action === 'inner-action') {
        args.dispatchOuter('outer-action')
        expect(args.innerState).toEqual(['inner-state', 'outer-state', 'click', 'inner-action'])
        expect(args.outerState).toBe('outer-state')
      }
    }

    const mergeStates = (outer: string, inner: string[]) => inner.concat([outer])

    const adapt = adapter({ propagate, mergeStates }, comp)

    const ctx = createContext(
      (a: string) => {
        expect(a).toBe('outer-action')
        didCallOuterDispatcher = true
      }
    )

    adapt.render(ctx, 'outer-state')

    expect(ctx.doc.body.innerHTML).toEqual('<div>inner-state, outer-state</div>')

    const el = ctx.doc.body.firstElementChild as HTMLDivElement
    el.click()
    expect(didCallPropagate).toBeTruthy()
    expect(didCallOuterDispatcher).toBeTruthy()
    expect(didCallInnerDispatcher).toBeTruthy()
    expect(ctx.doc.body.innerHTML).toEqual('<div>inner-state, outer-state, click, inner-action</div>')
  })
})
