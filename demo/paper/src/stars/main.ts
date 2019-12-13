import { lazy } from 'tempo-paper/lib/lazy'
import { adapter } from 'tempo-paper/lib/adapter'
import { CanvasState } from '../state'
import { Action as CanvasAction } from '../action'
import { State, Action, makeApp } from './app'
import { Point } from 'paper'

export const template = lazy(() => adapter<CanvasState, State, CanvasAction, Action>(
  {
    mergeStates: (outer, inner) => {
      return {
        ...inner,
        size: new Point(outer.size.width!, outer.size.height!)
      }
    }
  },
  makeApp()
))
