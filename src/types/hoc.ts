import type {
  PropsWithChildren,
  ForwardRefExoticComponent,
  RefAttributes,
  FC as RNFC
} from 'react'

import type {
  StyleProp,
  RegisteredStyle
} from 'react-native'

import type {
  Extend
} from './util'

import type {
  Restore,
  Shorten
} from './style'

export type PropsWith<P, A> = P & A

export type StyleFromProp<P> = Required<P> extends {style: infer U} ? U : never

export type StyleValue<S> = Pick<Extract<S, RegisteredStyle<any>>, '__registeredStyleBrand'>['__registeredStyleBrand']
export type StylePropValue<P> = Required<P> extends {style: infer S} ? StyleValue<S> extends never ? S : StyleValue<S>  : {}

export type RestoreStyleProp<P extends {style?: any}, S> = StyleFromProp<P> extends never ? S : StyleValue<P['style']> extends never ? S : StyleProp<S>
export type MergedStyleProp<P, S> = {style?: RestoreStyleProp<P, Extend<StylePropValue<P>, S>> | null}

export type StyleInjectedProps<P, SS=Shorten<StylePropValue<P>>> = Extend<P, MergedStyleProp<P, Partial<Restore<SS>>>>

export type EnhanceContentContainerStyle<P, SS> = P extends {contentContainerStyle?: any} ? Extend<P, {contentContainerSS?: StyleProp<SS>}> : P
export type StyleEnhancedProps<P, SS=Shorten<StylePropValue<P>>> = PropsWith<EnhanceContentContainerStyle<P, SS>, Partial<SS>>

export type FC<P, SS=Shorten<StylePropValue<P>>> = RNFC<StyleEnhancedProps<P, SS>>

export type PropsType<P> = P extends PropsWithChildren<PropsWith<infer U, infer S>> ? U : never
export type SSType<P> = P extends PropsWithChildren<PropsWith<infer U, infer S>> ? S : never

export type ExtractSSType<P> = Shorten<StylePropValue<P>>

export type RefType<T> = (T extends React.ComponentClass
  ? InstanceType<T>
  : T extends ForwardRefExoticComponent<infer P>
    ? P extends RefAttributes<infer R> ? R : never
    : T
)