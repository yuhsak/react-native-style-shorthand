import {
  renderHook
} from '@testing-library/react-hooks'

import type {
  ScrollViewProps
} from 'react-native'

import {
  useStyle,
  useRestoredStyle,
  useStyleShorthand
} from '../src/hooks'

import {
  Shorthand,
  Style
} from './object'

import type {
  StyleEnhancedProps,
  SS
} from '../src/types'

describe('Hooks', () => {

  test('useStyle, {memoize: true}', () => {

    const {result, rerender} = renderHook(
      ({ss}) => useStyle(ss, {memoize: true}),
      {initialProps: {ss: [Shorthand.container, Shorthand.shadowContainer]}}
    )

    // Make sure it works
    expect(result.current).toStrictEqual({...Shorthand.container, ...Shorthand.shadowContainer})

    // Make sure it memoizes by value
    let before = result.current
    rerender({ss: [{...Shorthand.container}, {...Shorthand.shadowContainer}]})
    let after = result.current
    expect(before).toBe(after)

  })

  test('useStyle, {memoize: false}', () => {

    const {result, rerender} = renderHook(
      ({ss}) => useStyle(ss, {memoize: false}),
      {initialProps: {ss: [Shorthand.container, Shorthand.shadowContainer]}}
    )

    // Make sure it always returns new object
    let before = result.current
    rerender({ss: [Shorthand.container, Shorthand.shadowContainer]})
    let after = result.current
    expect(before).not.toBe(after)

  })

  test('useRestoredStyle', () => {

    const {result, rerender} = renderHook(
      ({ss}) => useRestoredStyle(ss, {memoize: true}),
      {initialProps: {ss: Shorthand.container}}
    )

    // Make sure it works
    expect(result.current).toStrictEqual(Style.container)

    // Make sure memoizes by values
    let before = result.current
    rerender({ss: {...Shorthand.container}})
    let after = result.current
    expect(before).toBe(after)

    before = result.current
    rerender({ss: Shorthand.shadowContainer})
    after = result.current
    expect(before).not.toBe(after)

  })

  test('useStyleShorthand', () => {

    const createProps = ():StyleEnhancedProps<ScrollViewProps, SS.View> => ({
      contentContainerSS: {
        m: 30,
        p: 5
      },
      contentContainerStyle: {
        padding: 30,
        flex: 1
      },
      ...Shorthand.container,
      style: {
        flex: 1
      },
    })

    const {result, rerender} = renderHook(
      ({props}) => useStyleShorthand(props),
      {initialProps: {props: createProps()}}
    )

    // Make sure it works
    expect(result.current.contentContainerStyle).toStrictEqual({margin: 30, padding: 30, flex: 1})
    expect(result.current.style).toStrictEqual({margin: 20, padding: 20, flex: 1})

    expect(result.current).not.toHaveProperty('contentContainerSS')
    expect(result.current).not.toHaveProperty(['m', 'p'])

    // Make sure it memoizes by values
    let beforeStyle = result.current.style
    let beforeCCStyle = result.current.contentContainerStyle
    rerender({props: createProps()})
    let afterStyle = result.current.style
    let afterCCStyle = result.current.contentContainerStyle

    expect(beforeStyle).toBe(afterStyle)
    expect(beforeCCStyle).toBe(afterCCStyle)

  })

})