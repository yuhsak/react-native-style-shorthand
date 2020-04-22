import type {
  FilterUndefined,
  TupleToObject
} from './types'

export const emptyObject = {}

export type TupleToUnionTuple<T extends any[]> = T[number]

export const fromEntries = <T extends [string|number, any][]>(arr: T):TupleToObject<TupleToUnionTuple<T>> => (
  arr.reduce((acc, [k, v]) => ({...acc, [k]: v}), {}) as any
)

export const filterUndefined = <T>(obj: T):Partial<FilterUndefined<T>> =>(
  fromEntries(Object.entries(obj)
    .filter((kv) => kv[1] !== undefined)) as any
)

export const unit = <T>(entity: T | T[]) => Array.isArray(entity) ? entity : [entity]

export const flat = <T>(arr: any[]):T[] => arr.reduce((acc, n) => [...unit(acc), ...unit(n)])

export const flatMap = <T>(arr: any[], fn: (value: any, index: number, array: any[])=>any):T[] => flat(arr.map(fn))