import { Path } from 'paper'
import { PaperAttribute } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge,
  MakeOptional
} from 'tempo-core/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { ItemEvents, createItem } from './item'

type WritablePath = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<Path>>
>

type WritablePathOptionKeys = keyof WritablePath

type WritablePathOptions<State> = {
  [K in WritablePathOptionKeys]?: PaperAttribute<State, WritablePath[K]>
}

type PathOptions<State, Action, Query, T> = MakeOptional<
  Merge<
    { args?: {} },
    Merge<
      Merge<
        WritablePathOptions<State>,
        TempoAttributes<State, Action, Query, Path, T>
      >,
      ItemEvents<State, Action, Path>
    >
  >
>

type PathConstrOptions<State, Action, Query, T> = Merge<
  { args: {} },
  MakeOptional<
    Merge<
      Merge<
        WritablePathOptions<State>,
        TempoAttributes<State, Action, Query, Path, T>
      >,
      ItemEvents<State, Action, Path>
    >
  >
>

export const path = <State, Action, Query = unknown, T = unknown>(
  options: PathOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >(
    (_: State) =>
      typeof options.args !== 'undefined'
        ? new Path(options.args)
        : new Path([]),
    options
  )

export const pathLine = <State, Action, Query = unknown, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.Line(options.args), options)

export const pathCircle = <State, Action, Query = unknown, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.Circle(options.args), options)

export const pathRectangle = <State, Action, Query = unknown, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.Rectangle(options.args), options)

export const pathEllipse = <State, Action, Query, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.Ellipse(options.args), options)

export const pathArc = <State, Action, Query = unknown, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.Arc(options.args), options)

export const pathRegularPolygon = <State, Action, Query = unknown, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.RegularPolygon(options.args), options)

export const pathStar = <State, Action, Query = unknown, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.Star(options.args), options)
