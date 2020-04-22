import {
  renderHook,
  act
} from '@testing-library/react-hooks'

import {
  deepFlatten,
  flatten,
  compose,
  restore,
  create,
  useMemo
} from '../src/stylesheet'

import {
  Shorthand,
  Style
} from './object'

describe('General functions', () => {

  test('deepFlatten', () => {

    const q = [{
      a: 0,
      b: 1,
      c: [2, 3, {
        d: 4,
        e: [5, 6],
        f: {
          g: [7],
          h: [8, {
            j: [9]
          }]
        }
      }]
    }]

    const c = [0,1,2,3,4,5,6,7,8,9]

    expect(deepFlatten(q)).toStrictEqual(c)

  })

  test('flatten', () => {

    const q = [Shorthand.container, [Shorthand.shadowContainer, Shorthand.bgcContainer]]

    expect(flatten(q)).toStrictEqual(Shorthand.all)

  })

  test('compose', () => {

    expect(compose(Shorthand.container, undefined)).toEqual(Shorthand.container)
    expect(compose(null, Shorthand.shadowContainer)).toEqual(Shorthand.shadowContainer)
    expect(compose(Shorthand.container, Shorthand.shadowContainer)).toStrictEqual([Shorthand.container, Shorthand.shadowContainer])

  })

  test('restore', () => {

    expect(restore(Shorthand.container)).toStrictEqual(Style.container)
    expect(restore(Shorthand.shadowContainer)).toStrictEqual(Style.shadowContainer)
    expect(restore([Shorthand.container, [Shorthand.shadowContainer, Shorthand.bgcContainer]])).toStrictEqual(Style.all)

  })

  test('create', () => {

    expect(create({container: Shorthand.container})).toStrictEqual({container: Shorthand.container})

  })

})



describe('Hooks', () => {

  test('useMemo', () => {

    // Make sure it works
    const {result, rerender} = renderHook(
      ({ss}) => useMemo({container: ss}),
      {initialProps: {ss: Shorthand.container}}
    )
    expect(result.current).toStrictEqual({container: Shorthand.container})

    // Make sure it returns same object when argument's values are same
    let before = result.current
    rerender({ss: {...Shorthand.container}})
    let after = result.current
    expect(before).toBe(after)
    expect(after).toStrictEqual({container: Shorthand.container})

    // Make sure it returns different object when argument's values are different
    before = result.current
    rerender({ss: {...Shorthand.bgcContainer}})
    after = result.current
    expect(before).not.toBe(after)
    expect(after).toStrictEqual({container: Shorthand.bgcContainer})

  })

})