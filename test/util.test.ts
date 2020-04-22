import {
  fromEntries,
  filterUndefined,
  unit,
  flat,
  flatMap
} from '../src/util'

describe('General Functions', () => {

  test('fromEntries', () => {
    expect(fromEntries([['a', 0], ['b', 1], ['c', '2']])).toStrictEqual({a: 0, b: 1, c: '2'})
  })

  test('filterUndefined', () => {
    expect(filterUndefined({a: 0, b: '1', c: undefined})).toStrictEqual({a: 0, b: '1'})
  })

  test('unit', () => {
    expect(unit(0)).toStrictEqual([0])
    expect(unit([0])).toStrictEqual([0])
    expect(unit([0, 1, 2])).toStrictEqual([0, 1, 2])
  })

  test('flat', () => {
    expect(flat([0, [1, 2], [3], 4])).toStrictEqual([0, 1, 2, 3, 4])
  })

  test('flatMap', () => {
    expect(flatMap([0, 1, 2, 3, 4], n => n)).toStrictEqual([0, 1, 2, 3, 4])
    expect(flatMap([0, 1, 2, 3, 4], n => [n])).toStrictEqual([0, 1, 2, 3, 4])
    expect(flatMap([0, 1, 2, 3, 4], n => n > 1 ? [n] : [])).toStrictEqual([2, 3, 4])
  })

})