import { useMemo as RNuseMemo } from 'react'

import { StyleSheet as RNStyleSheet } from 'react-native'

import type { StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native'

import { emptyObject, filterUndefined, flatMap } from './util'

import type { Restore, SS } from './types'

export namespace RNSS {
  export type Some = ViewStyle | TextStyle | ImageStyle
}

export type SomeStyle = RNSS.Some | SS.Some

export const deepFlatten = (obj: object): any[] => (Array.isArray(obj) ? flatMap(obj, deepFlatten) : typeof obj === 'object' ? flatMap(Object.values(obj), deepFlatten) : [obj])

export const flatten = <S extends SomeStyle>(style: StyleProp<S>) => RNStyleSheet.flatten(style)

export type Nullish = undefined | null
export type Compose<T, T2> = T extends Nullish ? T2 : T2 extends Nullish ? T : [T, T2]

export const compose = <S1 extends SomeStyle, S2 extends SomeStyle>(s1: StyleProp<S1>, s2: StyleProp<S2>): StyleProp<Compose<S1, S2>> => RNStyleSheet.compose(s1, s2 as any)

export const create = <T extends Record<string, SomeStyle>>(styles: T): T => styles as any

export const useMemo = <T extends Record<string, SomeStyle>>(style: T): T => RNuseMemo(() => style, deepFlatten(style)) as any

export const restore = <SS extends SS.Some>(props?: StyleProp<SS>) => {
  const style = flatten(props) as any

  return (
    !style
      ? emptyObject
      : filterUndefined({
          margin: style.m,
          marginTop: style.mt,
          marginRight: style.mr,
          marginBottom: style.mb,
          marginLeft: style.ml,
          marginStart: style.ms,
          marginEnd: style.me,
          marginHorizontal: style.mh,
          marginVertical: style.mv,
          padding: style.p,
          paddingTop: style.pt,
          paddingRight: style.pr,
          paddingBottom: style.pb,
          paddingLeft: style.pl,
          paddingStart: style.ps,
          paddingEnd: style.pe,
          paddingHorizontal: style.ph,
          paddingVertical: style.pv,
          backgroundColor: style.bgc,
          opacity: style.o,
          backfaceVisibility: style.bv,
          overflow: style.of,
          borderColor: style.bc,
          borderTopColor: style.btc,
          borderRightColor: style.brc,
          borderBottomColor: style.bbc,
          borderLeftColor: style.blc,
          borderStartColor: style.bsc,
          borderEndColor: style.bec,
          borderWidth: style.bw,
          borderTopWidth: style.btw,
          borderRightWidth: style.brw,
          borderBottomWidth: style.bbw,
          borderLeftWidth: style.blw,
          borderStartWidth: style.bsw,
          borderEndWidth: style.bew,
          borderRadius: style.br,
          borderTopRightRadius: style.btrr,
          borderTopLeftRadius: style.btlr,
          borderTopStartRadius: style.btsr,
          borderTopEndRadius: style.bter,
          borderBottomRightRadius: style.bbrr,
          borderBottomLeftRadius: style.bblr,
          borderBottomStartRadius: style.bbsr,
          borderBottomEndRadius: style.bber,
          borderStyle: style.bs,
          shadowColor: style.sc,
          shadowOffset:
            style.soh !== undefined && style.sow !== undefined
              ? {
                  height: style.soh,
                  width: style.sow,
                }
              : undefined,
          shadowOpacity: style.so,
          shadowRadius: style.sr,
          width: style.w,
          minWidth: style.mnw,
          maxWidth: style.mxw,
          height: style.h,
          minHeight: style.mnh,
          maxHeight: style.mxh,
          position: style.po,
          top: style.t,
          right: style.r,
          bottom: style.b,
          left: style.l,
          start: style.s,
          end: style.e,
          zIndex: style.z,
          flex: style.f,
          alignSelf: style.asf,
          display: style.d,
          flexBasis: style.fb,
          flexDirection: style.fd,
          flexWrap: style.fw,
          flexGrow: style.fg,
          flexShrink: style.fs,
          justifyContent: style.jc,
          alignItems: style.ai,
          alignContent: style.ac,
          direction: style.dt,
          transform: style.tf,
          transformMatrix: style.tfm,
          rotation: style.rt,
          scaleX: style.sx,
          scaleY: style.sy,
          translateX: style.tx,
          translateY: style.ty,
          color: style.c,
          fontFamily: style.ftf,
          fontSize: style.ftsz,
          fontStyle: style.ftsl,
          fontWeight: style.ftw,
          fontVariant: style.ftv,
          letterSpacing: style.ls,
          lineHeight: style.lh,
          textAlign: style.ta,
          textDecorationLine: style.tdl,
          textDecorationStyle: style.tds,
          textDecorationColor: style.tdc,
          textShadowColor: style.tsc,
          textShadowOffset:
            style.tsoh !== undefined && style.tsow !== undefined
              ? {
                  height: style.tsoh,
                  width: style.tsow,
                }
              : undefined,
          textShadowRadius: style.tsr,
          textAlignVertical: style.tav,
          textTransform: style.tt,
          writingDirection: style.wd,
          includeFontPadding: style.ifp,
          resizeMode: style.rm,
          overlayColor: style.oc,
          tintColor: style.tc,
          aspectRatio: style.ar,
          testID: style.tid,
          elevation: style.el,
        })
  ) as Restore<SS>
}

export const StyleSheet = {
  ...RNStyleSheet,
  create,
  useMemo,
  compose,
  flatten,
  restore,
}
