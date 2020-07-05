import { DOMTemplate, DOMChild } from '../template'
import { text } from './text'
import { DerivedOrLiteralValue, DerivedValue } from 'tempo-core/lib/value'
import { keys } from 'tempo-std/lib/objects'

export type ListValue<T extends string> = T | T[] | Record<T, boolean>

export interface IBuilder<State, Action, Query> {
  build(): DOMTemplate<State, Action, Query>
}

export function childOrBuilderToTemplate<State, Action, Query>(
  src: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
): DOMTemplate<State, Action, Query> {
  if (src === undefined) {
    return text('')
  } else if (typeof (src as any).build === 'function') {
    return (src as IBuilder<State, Action, Query>).build()
  } else if (typeof src === 'string' || typeof src === 'function') {
    return text(src)
  } else {
    return src as DOMTemplate<State, Action, Query>
  }
}

export function extractLiterals<State>(
  record: Record<string, DerivedOrLiteralValue<State, string>>
) {
  return keys(record).reduce((list, name) => {
    if (typeof record[name] === 'string') {
      list.push({ name, value: record[name] as string })
    }
    return list
  }, [] as { name: string; value: string }[])
}

export function extractDerived<State>(
  record: Record<string, DerivedOrLiteralValue<State, string>>
) {
  return keys(record).reduce((list, name) => {
    if (typeof record[name] === 'function') {
      list.push({
        name,
        resolve: record[name] as DerivedValue<State, string>
      })
    }
    return list
  }, [] as { name: string; resolve: DerivedValue<State, string> }[])
}
export function separatedToString(src: ListValue<string>, separator: string) {
  if (typeof src === 'string') {
    return src
  } else if (src == null) {
    return undefined
  } else if (Array.isArray(src)) {
    return src.join(separator)
  } else {
    return keys(src)
      .reduce((list, key) => {
        if (src[key]) list.push(key)
        return list
      }, [] as string[])
      .join(separator)
  }
}

export function spaceSeparatedToString(src: ListValue<string>) {
  return separatedToString(src, ' ')
}

export function commaSeparatedToString(src: ListValue<string>) {
  return separatedToString(src, ', ')
}

export function stylesToString(src: string | Record<string, string>) {
  if (typeof src === 'string') {
    return src
  } else {
    return keys(src)
      .reduce((list, key) => {
        if (src[key]) list.push(`${key}: ${src[key]};`)
        return list
      }, [] as string[])
      .join(' ')
  }
}

export function booleanToString(src: boolean) {
  return `${src}`
}

export function toggleToString(name: string) {
  return (src: boolean) => (src ? name : '')
}

export class DOMBuilder<State, Action, Query> {
  protected _children: DOMTemplate<State, Action, Query>[] = []
  // children
  append(
    el: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  ): this {
    this._children.push(childOrBuilderToTemplate(el))
    return this
  }
  appendMany(
    ...els: (DOMChild<State, Action, Query> | IBuilder<State, Action, Query>)[]
  ): this {
    this._children.push(...els.map(childOrBuilderToTemplate))
    return this
  }

  // transform
}
