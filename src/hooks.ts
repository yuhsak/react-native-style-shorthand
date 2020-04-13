import {
  useMemo
} from 'react'

import type {
  StyleProp
} from 'react-native'

import {
  restore,
  flatten,
  deepFlatten
} from './stylesheet'

import type {
  SS,
  StyleInjectedProps,
  StyleEnhancedProps
} from './types'

export const styleShorthandPropKeys:Array<keyof SS.All> = [
  'p', 'pt', 'pr', 'pb', 'pl', 'ps', 'pe', 'pv', 'ph',
  'm', 'mt', 'mr', 'mb', 'ml', 'ms', 'me', 'mv', 'mh',
  'bgc', 'o', 'bv', 'of',
  'bc', 'btc', 'brc', 'bbc', 'blc', 'bsc', 'bec',
  'bw', 'btw', 'brw', 'bbw', 'blw', 'bsw', 'bew',
  'br', 'btrr', 'btlr', 'btsr', 'bter', 'bbrr', 'bblr', 'bbsr', 'bber',
  'bs',
  'sc', 'so', 'sow', 'soh', 'sr',
  'w', 'mnw', 'mxw',
  'h', 'mnh', 'mxh',
  'po', 't', 'r', 'b', 'l', 's', 'e', 'z',
  'f', 'asf', 'd',
  'fb', 'fd', 'fw', 'fg', 'fs', 'jc', 'ai', 'ac', 'dt',
  'tf', 'tfm', 'rt', 'sx', 'sy', 'tx', 'ty',
  'c', 'ftf', 'ftsz', 'ftsl', 'ftw', 'ftv', 'ls', 'lh', 'ta', 'tds', 'tdc', 'tsc', 'tsoh', 'tsow', 'tsr', 'tav', 'tt', 'wd', 'ifp',
  'rm', 'oc', 'tc', 'ar',
  'tid', 'el',
]

export const getStyleShorthandPropValues = <SS extends SS.Some>(props?: SS) => (
  deepFlatten(
    styleShorthandPropKeys.map(k => (props||{} as SS)[k as keyof SS])
  )
)

export type UseStyleShorthandOptions = {
  memoize: boolean
}

export const useStyle = <S extends object>(style?: StyleProp<S>, {memoize=true}:UseStyleShorthandOptions={memoize:true}) => {
  const s = flatten(style)
  return useMemo(() => s, memoize ? deepFlatten(s) : undefined)
}

export const useRestoredStyle = <SS extends SS.Some>(props?: StyleProp<SS>, {memoize=true}:UseStyleShorthandOptions={memoize:true}) => {
  const s = flatten(props)
  return useMemo(() => restore(s), memoize ? getStyleShorthandPropValues(s) : undefined)
}

export const extract = <P, SS>(props: StyleEnhancedProps<P, SS>) => {

  const {
    m, mt, mr, mb, ml, ms, me, mv, mh,
    p, pt, pr, pb, pl, ps, pe, pv, ph,
    bgc, o, bv, of,
    bc, btc, brc, bbc, blc, bsc, bec,
    bw, btw, brw, bbw, blw, bsw, bew,
    br, btrr, btlr, btsr, bter, bbrr, bblr, bbsr, bber,
    bs,
    sc, so, sow, soh, sr,
    w, mnw, mxw,
    h, mnh, mxh,
    po, t, r, b, l, s, e, z,
    f, asf, d,
    fb, fd, fw, fg, fs, jc, ai, ac, dt,
    tf, tfm, rt, sx, sy, tx, ty,
    c, ftf, ftsz, ftsl, ftw, ftv, ls, lh, ta, tds, tdc, tsc, tsoh, tsow, tsr, tav, tt, wd, ifp,
    rm, oc, tc, ar,
    tid, el,
    contentContainerSS,
    ...restProps
  } = props as any

  const shorthand = {
    m, mt, mr, mb, ml, ms, me, mv, mh,
    p, pt, pr, pb, pl, ps, pe, pv, ph,
    bgc, o, bv, of,
    bc, btc, brc, bbc, blc, bsc, bec,
    bw, btw, brw, bbw, blw, bsw, bew,
    br, btrr, btlr, btsr, bter, bbrr, bblr, bbsr, bber,
    bs,
    sc, so, sow, soh, sr,
    w, mnw, mxw,
    h, mnh, mxh,
    po, t, r, b, l, s, e, z,
    f, asf, d,
    fb, fd, fw, fg, fs, jc, ai, ac, dt,
    tf, tfm, rt, sx, sy, tx, ty,
    c, ftf, ftsz, ftsl, ftw, ftv, ls, lh, ta, tds, tdc, tsc, tsoh, tsow, tsr, tav, tt, wd, ifp,
    rm, oc, tc, ar,
    tid, el
  } as unknown as SS

  return {
    shorthand,
    contentContainerSS,
    restProps
  }

}

export const useMemoByValue = <T extends object>(obj: T) => useMemo(() => obj, deepFlatten(obj))

export const useStyleShorthand = <P extends {style?: any, contentContainerStyle?: any}, SS extends SS.Some>(props: StyleEnhancedProps<P, SS>, {memoize=true}: UseStyleShorthandOptions={memoize: true}):StyleInjectedProps<P, SS> => {

  const {shorthand, contentContainerSS, restProps} = extract<P, SS>(props)

  const restoredStyle = restore(shorthand)
  const composedStyle = useStyle([restoredStyle, props.style], {memoize})

  const restoredContentContainerStyle = restore(contentContainerSS)
  const composedContentContainerStyle = useStyle([restoredContentContainerStyle, props.contentContainerStyle], {memoize})

  return {...restProps, style: composedStyle, contentContainerStyle: composedContentContainerStyle}
  
}