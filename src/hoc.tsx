import React from 'react'

import type { ComponentType, ComponentProps, PropsWithChildren, ForwardRefRenderFunction, FC } from 'react'

import type { FlatList, FlatListProps, SectionList, SectionListProps } from 'react-native'

import { useStyleShorthand, UseStyleShorthandOptions } from './hooks'

import type { WithAnimatedValue, ExtractSSType, StyleInjectedProps, StyleEnhancedProps, SS, RefType } from './types'

/**
 * Utility function to create React.FC enhanced with style shorthand
 */
export const fc = <P extends {} = {}, SS = ExtractSSType<P>>(Component: ComponentType<StyleInjectedProps<P, SS>>, opts?: UseStyleShorthandOptions) => {
  const component: FC<StyleEnhancedProps<P, SS>> = (props) => <Component {...useStyleShorthand<P, SS>(props, opts)} />
  component.displayName = `RNSS.fc${Component.displayName}`
  return component
}

/**
 * React.forwardRef with style shorthand
 */
export const forwardRef = <T, P = {}, SS = ExtractSSType<P>>(render: ForwardRefRenderFunction<RefType<T>, StyleInjectedProps<P, SS>>, opts?: UseStyleShorthandOptions) => {
  const component = React.forwardRef<RefType<T>, PropsWithChildren<StyleEnhancedProps<P, SS>>>((props, ref) => render(useStyleShorthand<P, SS>(props, opts), ref))
  component.displayName = `RNSS.forwardRef(${render.displayName})`
  return component
}

export const render = <P extends {}>(Component: ComponentType<P>): FC<P> => {
  const component: FC<P> = (props) => <Component {...props} />
  component.displayName = Component.displayName
  return component
}

export const renderWithRef = <T, P>(Component: ComponentType<P>): ForwardRefRenderFunction<T, P> => {
  const component: ForwardRefRenderFunction<T, P> = (props, ref) => <Component ref={ref} {...props} />
  component.displayName = Component.displayName
  return component
}

/**
 * Enhance style shorthand
 *
 * (Typically for FunctionComponent)
 */
export const enhance = <T extends ComponentType<any>, SS = ExtractSSType<ComponentProps<T>>>(Component: T, opts?: UseStyleShorthandOptions) =>
  fc<ComponentProps<T>, SS>(render(Component), opts)

/**
 * Enhance ViewStyle shorthand
 *
 * (Typically for FunctionComponent)
 */
export const enhanceView = <T extends ComponentType<any>>(Component: T, opts?: UseStyleShorthandOptions) => enhance<T, SS.View>(Component, opts)

/**
 * Enhance TextStyle shorthand
 *
 * (Typically for FunctionComponent)
 */
export const enhanceText = <T extends ComponentType<any>>(Component: T, opts?: UseStyleShorthandOptions) => enhance<T, SS.Text>(Component, opts)

/**
 * Enhance ImageStyle shorthand
 *
 * (Typically for FunctionComponent)
 */
export const enhanceImage = <T extends ComponentType<any>>(Component: T, opts?: UseStyleShorthandOptions) => enhance<T, SS.Image>(Component, opts)

/**
 * Enhance style shorthand with ref
 *
 * (Typically for ClassComponent)
 */
export const enhanceWithRef = <T extends ComponentType<any>, SS = ExtractSSType<ComponentProps<T>>>(Component: T, opts?: UseStyleShorthandOptions) =>
  forwardRef<T, ComponentProps<T>, SS>(renderWithRef(Component), opts)

/**
 * Enhance ViewStyle shorthand with ref
 *
 * (Typically for ClassComponent)
 */
export const enhanceViewWithRef = <T extends ComponentType<any>>(Component: T, opts?: UseStyleShorthandOptions) => enhanceWithRef<T, SS.View>(Component, opts)

/**
 * Enhance TextStyle shorthand with ref
 *
 * (Typically for ClassComponent)
 */
export const enhanceTextWithRef = <T extends ComponentType<any>>(Component: T, opts?: UseStyleShorthandOptions) => enhanceWithRef<T, SS.Text>(Component, opts)

/**
 * Enhance ImageStyle shorthand with ref
 *
 * (Typically for ClassComponent)
 */
export const enhanceImageWithRef = <T extends ComponentType<any>>(Component: T, opts?: UseStyleShorthandOptions) => enhanceWithRef<T, SS.Image>(Component, opts)

/**
 * Utility function to create typed FlatList enhanced with style shorthand
 */
export const enhanceFlatList = <T, SS = SS.View>(Component: typeof FlatList, opts?: UseStyleShorthandOptions) =>
  forwardRef<FlatList<T>, FlatListProps<T>, SS>(renderWithRef<FlatList<T>, FlatListProps<T>>(Component), opts)

/**
 * Utility function to create typed SectionList enhanced with style shorthand
 */
export const enhanceSectionList = <T, SS = SS.View>(Component: typeof SectionList, opts?: UseStyleShorthandOptions) =>
  forwardRef<any, SectionListProps<T>, SS>(renderWithRef<any, SectionListProps<T>>(Component), opts)

/**
 * Enhance style shorthand with ref
 *
 * (Typically for ClassComponent)
 */
export const enhanceAnimatedWithRef = <T extends ComponentType<any>, SS>(Component: T, opts?: UseStyleShorthandOptions) =>
  forwardRef<T, ComponentProps<T>, WithAnimatedValue<SS>>(renderWithRef(Component), opts)

/**
 * Enhance style shorthand with ref for animated view
 *
 * (Typically for ReactNative.Animated.View)
 */
export const enhanceAnimatedViewWithRef = <T extends ComponentType<any>>(Component: T, opts?: UseStyleShorthandOptions) =>
  forwardRef<T, ComponentProps<T>, WithAnimatedValue<SS.View>>(renderWithRef(Component), opts)

/**
 * Enhance style shorthand with ref for animated text
 *
 * (Typically for ReactNative.Animated.Text)
 */
export const enhanceAnimatedTextWithRef = <T extends ComponentType<any>>(Component: T, opts?: UseStyleShorthandOptions) =>
  forwardRef<T, ComponentProps<T>, WithAnimatedValue<SS.Text>>(renderWithRef(Component), opts)

/**
 * Enhance style shorthand with ref for animated image
 *
 * (Typically for ReactNative.Animated.Image)
 */
export const enhanceAnimatedImageWithRef = <T extends ComponentType<any>>(Component: T, opts?: UseStyleShorthandOptions) =>
  forwardRef<T, ComponentProps<T>, WithAnimatedValue<SS.Image>>(renderWithRef(Component), opts)
