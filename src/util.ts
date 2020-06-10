import type {
  FilterUndefined,
  TupleToObject,
  ObjectToTuple,
  ValueOf
} from './types'

export const emptyObject = {}

export type TupleToUnion<T extends any[]> = T[number]

export const values = <T extends Record<string|number, any>>(obj: T): ValueOf<T>[] => (
  Object.keys(obj).map(k => obj[k]) as any
)

export const entries = <T extends Record<string|number, any>>(obj: T): ObjectToTuple<T>[] => (
  Object.keys(obj).map(k => [k, obj[k]]) as any
)

export const fromEntries = <T extends [string|number, any][]>(arr: T): TupleToObject<TupleToUnion<T>> => (
  arr.reduce((acc, [k, v]) => ({...acc, [k]: v}), {}) as any
)

export const filterUndefined = <T>(obj: T):Partial<FilterUndefined<T>> =>(
  fromEntries(Object.entries(obj)
    .filter((kv) => kv[1] !== undefined)) as any
)

export const isArray = <T=any>(arg: any):arg is T[] => Object.prototype.toString.call(arg) === '[object Array]'

export const unit = <T>(entity: T | T[]) => isArray<T>(entity) ? entity : [entity]

const push = <T>(arr: T[], item: T): T[] => (Array.prototype.push.apply(arr, [item]) as 0||1) && arr

const flatPush = <T>(arr: T[], item: T|T[]): T[] => (Array.prototype.push.apply(arr, unit(item)) as 0||1) && arr

type Reduce = {
  <T, R>(arr: T[], fn: (accumulator: T, value: T, index: number, array: T[])=>R):R
  <T, R>(arr: T[], fn: (accumulator: R, value: T, index: number, array: T[])=>R, init: R | undefined):R
}

export const reduce:Reduce = <T, R>(arr: T[], fn: (accumulator: R|T, value: T, index: number, array: T[]) => R, init?: R) => {
  const start = init !== undefined ? 0 : 1
  let acc = init !== undefined ? init : arr[0]
  for(let i=start;i<arr.length;i++) {
    acc = fn(acc, arr[i], i, arr)
  }
  return acc
}

export const reverse = <T>(arr: T[]) => reduce<T, T[]>(arr, (acc, n, i, a) => push(acc, a[a.length-1-i]), [])

export const reduceRight:Reduce = <T, R>(arr: T[], fn: (accumulator: R|T, value: T, index: number, array: T[]) => R, init?: R) => (
  reduce(arr, (acc, n, i, a) => {
    const current = a.length-1-i
    const _acc = (i === 1 && init === undefined) ? a[a.length-1] : acc
    return fn(_acc, a[current], current, a)
  }, init)
)

export const concat = <T>(arr: T[], item?: T[] | T) => (
  reduce<T, T[]>(arr, (acc, v, i) => (
    ((acc: T[]) => i+1 === arr.length && item ? flatPush(acc, item) : acc)(push(acc, v))
  ), [])
)

export const map = <T, R>(arr: T[], fn: (value: T, index: number, array: T[])=>R) => (
  reduce<T, R[]>(arr, (acc, n, i, a) => push(acc, fn(n, i, a)), [])
)

export const filter = <T>(arr: T[], fn: (value: T, index: number, array: T[])=>boolean) => (
  reduce<T, T[]>(arr, (acc, n, i, a) => fn(n, i, a) ? push(acc, n) : acc, [])
)

export const forEach = <T>(arr: T[], fn: (value: T, index: number, array: T[])=>any) => (
  reduce<T, void>(arr, (acc, n, i, a) => (fn(n,i,a)||void(0)) && void(0), void(0))
)

export const flat = <T>(arr: T[]):T[] => reduce<T, T[]>(arr, (acc, n) => flatPush(acc, n), [])

export const flatMap = <T, R>(arr: T[], fn: (value: T, index: number, array: T[])=>R):R[] => flat(map(arr, fn))

export const findIndex = <T>(arr: T[], fn: (value: T, index: number, array: T[])=>boolean):number => (
  (() => {for(let i=0;i<arr.length;i++) {if(fn(arr[i], i, arr)) return i} return -1})()
)

export const find = <T>(arr: T[], fn: (value: T, index: number, array: T[])=>boolean):T|undefined => (
  ((i: number) => i > -1 ? arr[i] : void(0))(findIndex(arr, fn))
)

export const every = <T>(arr: T[], fn: (value: T, index: number, array: T[])=>boolean):boolean => (
  reduce(map(map(arr, fn), b => +b), (a,b) => a+b, 0) >= arr.length
)

export const some = <T>(arr: T[], fn: (value: T, index: number, array: T[])=>boolean):boolean => findIndex(arr, fn) > -1

export const includes = <T>(arr: T[], item: T):boolean => findIndex(arr, v => v === item) > -1

export const fn = {
  isArray,
  concat,
  reduce,
  map,
  filter,
  forEach,
  flat,
  flatMap,
  findIndex,
  find,
  every,
  some,
  includes
}

type FnName = keyof typeof fn

export const polyfill = (fnName: FnName, force=false) => {
  if(!Array.prototype[fnName as any] || force) {
    Object.defineProperty(Array.prototype, fnName, {
      value(...args: any[]) { (fn[fnName] as any).bind(null, this, ...args) }
    })
  }
}

export const applyPolyfills = (functionNames: ((FnName)[] | 'all')='all', force=false) => {
  for(let fnName in fn) {
    const n = fnName as FnName
    if(functionNames === 'all' || includes(functionNames, n)){
      polyfill(n, force)
    }
  }
}
