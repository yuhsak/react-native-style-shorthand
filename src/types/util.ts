// Extend<{k1: number, k2: number}, {k2: string, k3: boolean}> => {k1: number, k2: string, k3: boolean}
export type Extend<T, P> = Pick<T, Exclude<keyof T, keyof P>> & P

// TupleToObject<['k1', number] | ['k2', string], 0, 1> => {k1: number, k2: string}
// TupleToObject<[number, 'k1'] | [string, 'k2'], 1, 0> => {k1: number, k2: string}
export type TupleToObject<T extends [any, any], IK extends number=0, IV extends number=1> = {
  [K in T[IK]]: Extract<T, [[K, any], [any, K]][IK]>[IV]
}

// ValueOf<{k1: number, k2: number, k3: boolean, k4: string}> => number | boolean | string
export type ValueOf<T> = T[keyof T]

// ObjectToTuple<{k1: number, k2: string}> => ['k1', number] | ['k2', string]
export type ObjectToTuple<T> = ValueOf<{
  [K in keyof T]: [K, T[K]]
}>

// SwitchKV<{k1: 'Key1', k2: 'Key2'}> => {Key1: 'k1', Key2: 'k2'}
export type SwitchKV<T> = TupleToObject<ObjectToTuple<T>, 1, 0>

// MapKey<{k1: number, k2: string}, {k1: 'Key1', k2: 'Key2'}> => {Key1: number, Key2: string}
export type MapKey<T, M extends Record<string, string>, MS extends SwitchKV<M>=SwitchKV<M>> = {[P in M[keyof M]]: T[MS[P]]} extends infer A ? A : never

// FilterByValue<{k1: number, k2: string, k3: number, k4: boolean}, number | boolean> => {k2: string}
// export type FilterByValue<T, V> = TupleToObject<Exclude<ObjectToTuple<T>, [any, V]>>

export type ReplaceTuple<T extends [any, any], U extends [any, any], R extends [any, any]> = ValueOf<{[K in T[0]]: U extends Extract<T, [K, any]> ? R : Extract<T, [K, any]>}>

export type rm = ['__remove', '__remove']
export type FilterByValue<T, V> = TupleToObject<Exclude<ReplaceTuple<ObjectToTuple<T>, [any, V], rm>, rm>>
export type FilterUndefined<T> = FilterByValue<T, undefined>
export type FilterUnknown<T> = FilterByValue<T, unknown>