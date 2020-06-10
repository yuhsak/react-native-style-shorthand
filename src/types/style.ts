import type {
  FlexStyle,
  ShadowStyleIOS,
  TransformsStyle,
  ViewStyle,
  TextStyle,
  TextStyleIOS,
  TextStyleAndroid,
  ImageStyle,
  Animated
} from 'react-native'

import type {
  SwitchKV,
  MapKey,
  FilterUnknown
} from './util'

export type ViewBaseStyle = {
  backfaceVisibility?: ViewStyle['backfaceVisibility'],
  backgroundColor?: ViewStyle['backgroundColor'],
  borderBottomColor?: ViewStyle['borderBottomColor'],
  borderBottomEndRadius?: ViewStyle['borderBottomEndRadius'],
  borderBottomLeftRadius?: ViewStyle['borderBottomLeftRadius'],
  borderBottomRightRadius?: ViewStyle['borderBottomRightRadius'],
  borderBottomStartRadius?: ViewStyle['borderBottomStartRadius'],
  borderBottomWidth?: ViewStyle['borderBottomWidth'],
  borderColor?: ViewStyle['borderColor'],
  borderEndColor?: ViewStyle['borderEndColor'],
  borderLeftColor?: ViewStyle['borderLeftColor'],
  borderLeftWidth?: ViewStyle['borderLeftWidth'],
  borderRadius?: ViewStyle['borderRadius'],
  borderRightColor?: ViewStyle['borderRightColor'],
  borderRightWidth?: ViewStyle['borderRightWidth'],
  borderStartColor?: ViewStyle['borderStartColor'],
  borderStyle?: ViewStyle['borderStyle'],
  borderTopColor?: ViewStyle['borderTopColor'],
  borderTopEndRadius?: ViewStyle['borderTopEndRadius'],
  borderTopLeftRadius?: ViewStyle['borderTopLeftRadius'],
  borderTopRightRadius?: ViewStyle['borderTopRightRadius'],
  borderTopStartRadius?: ViewStyle['borderTopStartRadius'],
  borderTopWidth?: ViewStyle['borderTopWidth'],
  borderWidth?: ViewStyle['borderWidth'],
  opacity?: ViewStyle['opacity']
  testID?: ViewStyle['testID'],
  elevation?: ViewStyle['elevation']
}

export type TextBaseStyleIOS = {
  fontVariant?: TextStyleIOS['fontVariant'],
  letterSpacing?: TextStyleIOS['letterSpacing'],
  textDecorationColor?: TextStyleIOS['textDecorationColor'],
  textDecorationStyle?: TextStyleIOS['textDecorationStyle'],
  writingDirection?: TextStyleIOS['writingDirection']
}

export type TextBaseStyleAndroid = {
  textAlignVertical?: TextStyleAndroid['textAlignVertical'],
  includeFontPadding?: TextStyleAndroid['includeFontPadding']
}

export type TextBaseStyle = {
  color?: TextStyle['color'],
  fontFamily?: TextStyle['fontFamily'],
  fontSize?: TextStyle['fontSize'],
  fontStyle?: TextStyle['fontStyle'],
  fontWeight?: TextStyle['fontWeight'],
  letterSpacing?: TextStyle['letterSpacing'],
  lineHeight?: TextStyle['lineHeight'],
  textAlign?: TextStyle['textAlign'],
  textDecorationLine?: TextStyle['textDecorationLine'],
  textDecorationStyle?: TextStyle['textDecorationStyle'],
  textDecorationColor?: TextStyle['textDecorationColor'],
  textShadowColor?: TextStyle['textShadowColor'],
  textShadowOffset?: TextStyle['textShadowOffset'],
  textShadowRadius?: TextStyle['textShadowRadius'],
  textTransform?: TextStyle['textTransform'],
  testID?: TextStyle['testID']
}

export type ImageBaseStyle = {
  resizeMode?: ImageStyle['resizeMode'],
  backfaceVisibility?: ImageStyle['backfaceVisibility'],
  borderBottomLeftRadius?: ImageStyle['borderBottomLeftRadius'],
  borderBottomRightRadius?: ImageStyle['borderBottomRightRadius'],
  backgroundColor?: ImageStyle['backgroundColor'],
  borderColor?: ImageStyle['borderColor'],
  borderWidth?: ImageStyle['borderWidth'],
  borderRadius?: ImageStyle['borderRadius'],
  borderTopLeftRadius?: ImageStyle['borderTopLeftRadius'],
  borderTopRightRadius?: ImageStyle['borderTopRightRadius'],
  overflow?: ImageStyle['overflow'],
  overlayColor?: ImageStyle['overlayColor'],
  tintColor?: ImageStyle['tintColor'],
  opacity?: ImageStyle['opacity']
}

export type TransformsSSMap = {
  tf: 'transform',
  tfm: 'transformMatrix',
  rt: 'rotation',
  sx: 'scaleX',
  sy: 'scaleY',
  tx: 'translateX',
  ty: 'translateY'
}

/**
 * Shothand for ReactNative.TransformsStyle
 */
export type TransformsSS = {
  /** ```TransformsStyle.transform``` */
  tf?: TransformsStyle['transform'],
  /** ```TransformsStyle.transformMatrix``` */
  tfm?: TransformsStyle['transformMatrix'],
  /** ```TransformsStyle.rotation```*/
  rt?: TransformsStyle['rotation'],
  /** ```TransformsStyle.scaleX``` */
  sx?: TransformsStyle['scaleX'],
  /** ```TransformsStyle.scaleY``` */
  sy?: TransformsStyle['scaleY'],
  /** ```TransformsStyle.tlanslateX``` */
  tx?: TransformsStyle['translateX'],
  /** ```TransformsStyle.tlanslateY``` */
  ty?: TransformsStyle['translateY']
}

export type ShadowSSIOSMap = {
  sc: 'shadowColor',
  so: 'shadowOpacity',
  sr: 'shadowRadius',
  shadowOffset: 'shadowOffset'
}

/**
 * Shothand for ReactNative.ShadowStyleIOS
 */
export type ShadowSSIOS = {
  /** ```ShadowStyleIOS.shadowColor``` */
  sc?: ShadowStyleIOS['shadowColor'],
  /** ```ShadowStyleIOS.shadowOffset.height``` */
  soh?: NonNullable<ShadowStyleIOS['shadowOffset']>['height'],
  /** ```ShadowStyleIOS.shadowOffset.width``` */
  sow?: NonNullable<ShadowStyleIOS['shadowOffset']>['width'],
  /** ```ShadowStyleIOS.shadowOpacity``` */
  so?: ShadowStyleIOS['shadowOpacity'],
  /** ```ShadowStyleIOS.shadowRadius``` */
  sr?: ShadowStyleIOS['shadowRadius']
}

export type FlexSSMap = {
  ac: 'alignContent',
  ai: 'alignItems',
  asf: 'alignSelf',
  ar: 'aspectRatio',
  bbw: 'borderBottomWidth',
  bew: 'borderEndWidth',
  blw: 'borderLeftWidth',
  brw: 'borderRightWidth',
  bsw: 'borderStartWidth',
  btw: 'borderTopWidth',
  bw: 'borderWidth',
  b: 'bottom',
  d: 'display',
  e: 'end',
  f: 'flex',
  fb: 'flexBasis',
  fd: 'flexDirection',
  fg: 'flexGrow',
  fs: 'flexShrink',
  fw: 'flexWrap',
  h: 'height',
  jc: 'justifyContent',
  l: 'left',
  m: 'margin',
  mb: 'marginBottom',
  me: 'marginEnd',
  mh: 'marginHorizontal',
  ml: 'marginLeft',
  mr: 'marginRight',
  ms: 'marginStart',
  mt: 'marginTop',
  mv: 'marginVertical',
  mxh: 'maxHeight',
  mxw: 'maxWidth',
  mnh: 'minHeight',
  mnw: 'minWidth',
  of: 'overflow',
  p: 'padding',
  pb: 'paddingBottom',
  pe: 'paddingEnd',
  ph: 'paddingHorizontal',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  ps: 'paddingStart',
  pt: 'paddingTop',
  pv: 'paddingVertical',
  po: 'position',
  r: 'right',
  s: 'start',
  t: 'top',
  w: 'width',
  z: 'zIndex',
  dt: 'direction'
}

/**
 * Shothand for ReactNative.FlexStyle
 */
export type FlexSS = {
  /** ```FlexStyle.alignContent``` */
  ac?: FlexStyle['alignContent'],
  /** ```FlexStyle.alignItems``` */
  ai?: FlexStyle['alignItems'],
  /** ```FlexStyle.alignSelf``` */
  asf?: FlexStyle['alignSelf'],
  /** ```FlexStyle.aspectRatio``` */
  ar?: FlexStyle['aspectRatio'],
  /** ```FlexStyle.borderBottomWidth``` */
  bbw?: FlexStyle['borderBottomWidth'],
  /** ```FlexStyle.borderEndWidth``` */
  bew?: FlexStyle['borderEndWidth'],
  /** ```FlexStyle.borderLeftWidth``` */
  blw?: FlexStyle['borderLeftWidth'],
  /** ```FlexStyle.borderRightWidth``` */
  brw?: FlexStyle['borderRightWidth'],
  /** ```FlexStyle.borderStartWidth``` */
  bsw?: FlexStyle['borderStartWidth'],
  /** ```FlexStyle.borderTopWidth``` */
  btw?: FlexStyle['borderTopWidth'],
  /** ```FlexStyle.borderWidth``` */
  bw?: FlexStyle['borderWidth'],
  /** ```FlexStyle.bottom``` */
  b?: FlexStyle['bottom'],
  /** ```FlexStyle.display``` */
  d?: FlexStyle['display'],
  /** ```FlexStyle.end``` */
  e?: FlexStyle['end'],
  /** ```FlexStyle.flex``` */
  f?: FlexStyle['flex'],
  /** ```FlexStyle.flexBasis``` */
  fb?: FlexStyle['flexBasis'],
  /** ```FlexStyle.flexDirection``` */
  fd?: FlexStyle['flexDirection'],
  /** ```FlexStyle.flexGrow``` */
  fg?: FlexStyle['flexGrow'],
  /** ```FlexStyle.flexShrink``` */
  fs?: FlexStyle['flexShrink'],
  /** ```FlexStyle.flexWrap``` */
  fw?: FlexStyle['flexWrap'],
  /** ```FlexStyle.height``` */
  h?: FlexStyle['height'],
  /** ```FlexStyle.justifyContent``` */
  jc?: FlexStyle['justifyContent'],
  /** ```FlexStyle.left``` */
  l?: FlexStyle['left'],
  /** ```FlexStyle.margin``` */
  m?: FlexStyle['margin'],
  /** ```FlexStyle.marginBottom``` */
  mb?: FlexStyle['marginBottom'],
  /** ```FlexStyle.marginEnd``` */
  me?: FlexStyle['marginEnd'],
  /** ```FlexStyle.marginHorizontal``` */
  mh?: FlexStyle['marginHorizontal'],
  /** ```FlexStyle.marginLeft``` */
  ml?: FlexStyle['marginLeft'],
  /** ```FlexStyle.marginRight``` */
  mr?: FlexStyle['marginRight'],
  /** ```FlexStyle.marginStart``` */
  ms?: FlexStyle['marginStart'],
  /** ```FlexStyle.marginTop``` */
  mt?: FlexStyle['marginTop'],
  /** ```FlexStyle.marginVertical``` */
  mv?: FlexStyle['marginVertical'],
  /** ```FlexStyle.maxHeight``` */
  mxh?: FlexStyle['maxHeight'],
  /** ```FlexStyle.maxWidth``` */
  mxw?: FlexStyle['maxWidth'],
  /** ```FlexStyle.minHeight``` */
  mnh?: FlexStyle['minHeight'],
  /** ```FlexStyle.minWidth``` */
  mnw?: FlexStyle['minWidth'],
  /** ```FlexStyle.overflow``` */
  of?: FlexStyle['overflow'],
  /** ```FlexStyle.padding``` */
  p?: FlexStyle['padding'],
  /** ```FlexStyle.paddingBottom``` */
  pb?: FlexStyle['paddingBottom'],
  /** ```FlexStyle.paddingEnd``` */
  pe?: FlexStyle['paddingEnd'],
  /** ```FlexStyle.paddingHorizontal``` */
  ph?: FlexStyle['paddingHorizontal'],
  /** ```FlexStyle.paddingLeft``` */
  pl?: FlexStyle['paddingLeft'],
  /** ```FlexStyle.paddingRight``` */
  pr?: FlexStyle['paddingRight'],
  /** ```FlexStyle.paddingStart``` */
  ps?: FlexStyle['paddingStart'],
  /** ```FlexStyle.paddingTop``` */
  pt?: FlexStyle['paddingTop'],
  /** ```FlexStyle.paddingVertical``` */
  pv?: FlexStyle['paddingVertical'],
  /** ```FlexStyle.position``` */
  po?: FlexStyle['position'],
  /** ```FlexStyle.right``` */
  r?: FlexStyle['right'],
  /** ```FlexStyle.start``` */
  s?: FlexStyle['start'],
  /** ```FlexStyle.top``` */
  t?: FlexStyle['top'],
  /** ```FlexStyle.width``` */
  w?: FlexStyle['width'],
  /** ```FlexStyle.zIndex``` */
  z?: FlexStyle['zIndex'],
  /** ```FlexStyle.direction``` */
  dt?: FlexStyle['direction']
}

export type BaseSSMap = FlexSSMap & ShadowSSIOSMap & TransformsSSMap

/**
 * Shothand for basic styles which is accepted for every RN Component
 */
export type BaseSS = FlexSS & ShadowSSIOS & TransformsSS

export type ViewBaseSSMap = {
  bv: 'backfaceVisibility',
  bgc: 'backgroundColor',
  bbc: 'borderBottomColor',
  bber: 'borderBottomEndRadius',
  bblr: 'borderBottomLeftRadius',
  bbrr: 'borderBottomRightRadius',
  bbsr: 'borderBottomStartRadius',
  bbw: 'borderBottomWidth',
  bc: 'borderColor',
  bec: 'borderEndColor',
  blc: 'borderLeftColor',
  blw: 'borderLeftWidth',
  br: 'borderRadius',
  brc: 'borderRightColor',
  brw: 'borderRightWidth',
  bsc: 'borderStartColor',
  bs: 'borderStyle',
  btc: 'borderTopColor',
  bter: 'borderTopEndRadius',
  btlr: 'borderTopLeftRadius',
  btrr: 'borderTopRightRadius',
  btsr: 'borderTopStartRadius',
  btw: 'borderTopWidth',
  bw: 'borderWidth',
  o: 'opacity',
  tid: 'testID',
  el: 'elevation'
}

export type ViewSSMap = BaseSSMap & ViewBaseSSMap

export type ViewBaseSS = {
    /** ```ViewStyle.backfaceVisibility``` */
  bv?: ViewBaseStyle['backfaceVisibility'],
  /** ```ViewStyle.backgroundColor``` */
  bgc?: ViewBaseStyle['backgroundColor'],
  /** ```ViewStyle.borderBottomColor``` */
  bbc?: ViewBaseStyle['borderBottomColor'],
  /** ```ViewStyle.borderBottomEndRadius``` */
  bber?: ViewBaseStyle['borderBottomEndRadius'],
  /** ```ViewStyle.borderBottomLeftRadius``` */
  bblr?: ViewBaseStyle['borderBottomLeftRadius'],
  /** ```ViewStyle.borderBottomRightRadius``` */
  bbrr?: ViewBaseStyle['borderBottomRightRadius'],
  /** ```ViewStyle.borderBottomStartRadius``` */
  bbsr?: ViewBaseStyle['borderBottomStartRadius'],
  /** ```ViewStyle.borderBottomWidth``` */
  bbw?: ViewBaseStyle['borderBottomWidth'],
  /** ```ViewStyle.borderColor``` */
  bc?: ViewBaseStyle['borderColor'],
  /** ```ViewStyle.borderEndColor``` */
  bec?: ViewBaseStyle['borderEndColor'],
  /** ```ViewStyle.borderLeftColor``` */
  blc?: ViewBaseStyle['borderLeftColor'],
  /** ```ViewStyle.borderLeftWidth``` */
  blw?: ViewBaseStyle['borderLeftWidth'],
  /** ```ViewStyle.borderRadius``` */
  br?: ViewBaseStyle['borderRadius'],
  /** ```ViewStyle.borderRightColor``` */
  brc?: ViewBaseStyle['borderRightColor'],
  /** ```ViewStyle.borderRightWidth``` */
  brw?: ViewBaseStyle['borderRightWidth'],
  /** ```ViewStyle.borderStartColor``` */
  bsc?: ViewBaseStyle['borderStartColor'],
  /** ```ViewStyle.borderStyle``` */
  bs?: ViewBaseStyle['borderStyle'],
  /** ```ViewStyle.borderTopColor``` */
  btc?: ViewBaseStyle['borderTopColor'],
  /** ```ViewStyle.borderTopEndRadius``` */
  bter?: ViewBaseStyle['borderTopEndRadius'],
  /** ```ViewStyle.borderTopLeftRadius``` */
  btlr?: ViewBaseStyle['borderTopLeftRadius'],
  /** ```ViewStyle.borderTopRightRadius``` */
  btrr?: ViewBaseStyle['borderTopRightRadius'],
  /** ```ViewStyle.borderTopStartRadius``` */
  btsr?: ViewBaseStyle['borderTopStartRadius'],
  /** ```ViewStyle.borderTopWidth``` */
  btw?: ViewBaseStyle['borderTopWidth'],
  /** ```ViewStyle.borderWidth``` */
  bw?: ViewBaseStyle['borderWidth'],
  /** ```ViewStyle.opacity``` */
  o?: ViewBaseStyle['opacity'],
  /** ```ViewStyle.testID``` */
  tid?: ViewBaseStyle['testID'],
  /** ```ViewStyle.elevation``` */
  el?: ViewBaseStyle['elevation']
}

/**
 * Shothand for ReactNative.ViewStyle
 */
export type ViewSS = ViewBaseSS & BaseSS

export type TextBaseSSIOSMap = {
  ftv: 'fontVariant',
  ls: 'letterSpacing',
  tdc: 'textDecorationColor',
  tds: 'textDecorationStyle',
  wd: 'writingDirection'
}

export type TextSSIOSMap = TextBaseSSIOSMap & ViewSSMap

export type TextBaseSSIOS = {
  /** ```TextStyleIOS.``` */
  ftv?: TextBaseStyleIOS['fontVariant'],
  /** ```TextStyleIOS.letterSpacing``` */
  ls?: TextBaseStyleIOS['letterSpacing'],
  /** ```TextStyleIOS.textDecorationColor``` */
  tdc?: TextBaseStyleIOS['textDecorationColor'],
  /** ```TextStyleIOS.textDecorationStyle``` */
  tds?: TextBaseStyleIOS['textDecorationStyle'],
  /** ```TextStyleIOS.writingDirection``` */
  wd?: TextBaseStyleIOS['writingDirection']
}

/**
 * Shothand for ReactNative.TextStyleIOS
 */
export type TextSSIOS = TextBaseSSIOS & ViewSS

export type TextBaseSSAndroidMap = {
  tav: 'textAlignVertical',
  ifp: 'includeFontPadding'
}

export type TextSSAndroidMap = TextBaseSSAndroidMap & ViewSSMap

export type TextBaseSSAndroid = {
  /** ```TextStyleAndroid.textAlignVertical``` */
  tav?: TextBaseStyleAndroid['textAlignVertical'],
  /** ```TextStyleAndroid.includeFontPadding``` */
  ifp?: TextBaseStyleAndroid['includeFontPadding']
}

/**
 * Shothand for ReactNative.TextStyleAndroid
 */
export type TextSSAndroid = TextBaseSSAndroid & ViewSS

export type TextBaseSSMap = {
  c: 'color',
  ftf: 'fontFamily',
  ftsz: 'fontSize',
  ftsl: 'fontStyle',
  ftw: 'fontWeight',
  ls: 'letterSpacing',
  lh: 'lineHeight',
  ta: 'textAlign',
  tdl: 'textDecorationLine',
  tds: 'textDecorationStyle',
  tdc: 'textDecorationColor',
  tsc: 'textShadowColor',
  tsr: 'textShadowRadius',
  tt: 'textTransform',
  tid: 'testID',
  textShadowOffset: 'textShadowOffset'
}

export type TextSSMap =  TextBaseSSMap & TextSSIOSMap & TextSSAndroidMap & ViewSSMap

export type TextBaseSS = {
  /** ```TextStyle.``` */
  c?: TextBaseStyle['color'],
  /** ```TextStyle.fontFamily``` */
  ftf?: TextBaseStyle['fontFamily'],
  /** ```TextStyle.fontSize``` */
  ftsz?: TextBaseStyle['fontSize'],
  /** ```TextStyle.fontStyle``` */
  ftsl?: TextBaseStyle['fontStyle'],
  /** ```TextStyle.fontWeight``` */
  ftw?: TextBaseStyle['fontWeight'],
  /** ```TextStyle.letterSpacing``` */
  ls?: TextBaseStyle['letterSpacing'],
  /** ```TextStyle.lineHeight``` */
  lh?: TextBaseStyle['lineHeight'],
  /** ```TextStyle.textAlign``` */
  ta?: TextBaseStyle['textAlign'],
  /** ```TextStyle.textDecorationLine``` */
  tdl?: TextBaseStyle['textDecorationLine'],
  /** ```TextStyle.textDecorationStyle``` */
  tds?: TextBaseStyle['textDecorationStyle'],
  /** ```TextStyle.textDecorationColor``` */
  tdc?: TextBaseStyle['textDecorationColor'],
  /** ```TextStyle.textShadowColor``` */
  tsc?: TextBaseStyle['textShadowColor'],
  /** ```TextStyle.textShadowOffset.height``` */
  tsoh?: NonNullable<TextBaseStyle['textShadowOffset']>['height'],
  /** ```TextStyle.textShadowOffset.width``` */
  tsow?: NonNullable<TextBaseStyle['textShadowOffset']>['width'],
  /** ```TextStyle.textShadowRadius``` */
  tsr?: TextBaseStyle['textShadowRadius'],
  /** ```TextStyle.textTransform``` */
  tt?: TextBaseStyle['textTransform'],
  /** ```TextStyle.testID``` */
  tid?: TextBaseStyle['testID']
}

/**
 * Shothand for ReactNative.TextStyle
 */
export type TextSS = TextBaseSS & TextSSIOS & TextSSAndroid & ViewSS

export type ImageBaseSSMap = {
  rm: 'resizeMode',
  bv: 'backfaceVisibility',
  bblr: 'borderBottomLeftRadius',
  bbrr: 'borderBottomRightRadius',
  bgc: 'backgroundColor',
  bc: 'borderColor',
  bw: 'borderWidth',
  br: 'borderRadius',
  btlr: 'borderTopLeftRadius',
  btrr: 'borderTopRightRadius',
  of: 'overflow',
  oc: 'overlayColor',
  tc: 'tintColor',
  o: 'opacity'
}

export type ImageSSMap = ImageBaseSSMap & BaseSSMap

export type ImageBaseSS = {
  /** ```ImageStyle.resizeMode``` */
  rm?: ImageBaseStyle['resizeMode'],
  /** ```ImageStyle.backfaceVisibility``` */
  bv?: ImageBaseStyle['backfaceVisibility'],
  /** ```ImageStyle.borderBottomLeftRadius``` */
  bblr?: ImageBaseStyle['borderBottomLeftRadius'],
  /** ```ImageStyle.borderBottomRightRadius``` */
  bbrr?: ImageBaseStyle['borderBottomRightRadius'],
  /** ```ImageStyle.backgroundColor``` */
  bgc?: ImageBaseStyle['backgroundColor'],
  /** ```ImageStyle.borderColor``` */
  bc?: ImageBaseStyle['borderColor'],
  /** ```ImageStyle.borderWidth``` */
  bw?: ImageBaseStyle['borderWidth'],
  /** ```ImageStyle.borderRadius``` */
  br?: ImageBaseStyle['borderRadius'],
  /** ```ImageStyle.borderTopLeftRadius``` */
  btlr?: ImageBaseStyle['borderTopLeftRadius'],
  /** ```ImageStyle.borderTopRightRadius``` */
  btrr?: ImageBaseStyle['borderTopRightRadius'],
  /** ```ImageStyle.overflow``` */
  of?: ImageBaseStyle['overflow'],
  /** ```ImageStyle.overlayColor``` */
  oc?: ImageBaseStyle['overlayColor'],
  /** ```ImageStyle.tintColor``` */
  tc?: ImageBaseStyle['tintColor'],
  /** ```ImageStyle.opacity``` */
  o?: ImageBaseStyle['opacity']
}


/**
 * Shothand for ReactNative.ImageStyle
 */
export type ImageSS = ImageBaseSS & BaseSS

/**
 * Shorthand of all style
 */
export type AllSS = ViewSS & TextSS & ImageSS
export type AllSSMap = ViewSSMap & TextSSMap & ImageSSMap
export type AllSSMapOp = SwitchKV<AllSSMap>

export type StyleBrand<SS, S> = SS & {__styleBrand: S}
export type SSWithBrand<SS, S> = SS | StyleBrand<SS, S>
export type ExtractBrand<SSB> = Extract<SSB, {__styleBrand: any}>['__styleBrand']

/**
 * Type Aliases for style shorthand
 */
export namespace SS {
  export type Transforms = SSWithBrand<TransformsSS, TransformsStyle>
  export type Flex = SSWithBrand<FlexSS, FlexStyle>
  export type ShadowIOS = SSWithBrand<ShadowSSIOS, ShadowStyleIOS>
  export type Base = SSWithBrand<BaseSS, FlexStyle&ShadowStyleIOS&TransformsStyle>
  export type ViewBase = SSWithBrand<ViewBaseSS, ViewBaseStyle>
  export type View = SSWithBrand<ViewSS, ViewStyle>
  export type TextBaseIOS = SSWithBrand<TextBaseSSIOS, TextBaseStyleIOS>
  export type TextIOS = SSWithBrand<TextSSIOS, TextStyleIOS>
  export type TextBaseAndroid = SSWithBrand<TextBaseSSAndroid, TextBaseStyleAndroid>
  export type TextAndroid = SSWithBrand<TextSSAndroid, TextStyleAndroid>
  export type TextBase =SSWithBrand<TextBaseSS, TextBaseStyle>
  export type Text = SSWithBrand<TextSS, TextStyle>
  export type ImageBase = SSWithBrand<ImageBaseSS, ImageBaseStyle>
  export type Image = SSWithBrand<ImageSS, ImageStyle>
  export type All = SSWithBrand<AllSS, ViewStyle&TextStyle&ImageStyle>
  export type Some = View | Text | Image
}

/**
 * Type Aliases for style shorthand map
 */
export namespace MAP {
  export type Transforms = TransformsSSMap
  export type Flex = FlexSSMap
  export type ShadowIOS = ShadowSSIOSMap
  export type Base = BaseSSMap
  export type ViewBase = ViewBaseSSMap
  export type View = ViewSSMap
  export type TextBaseIOS = TextBaseSSIOSMap
  export type TextIOS = TextSSIOSMap
  export type TextBaseAndroid = TextBaseSSAndroidMap
  export type TextAndroid = TextSSAndroidMap
  export type TextBase = TextBaseSSMap
  export type Text = TextSSMap
  export type ImageBase = ImageBaseSSMap
  export type Image = ImageSSMap
  export type All = AllSSMap
}

export type HandleSOX<T> = Required<T> extends ({sow: any} | {soh: any})
  ? Omit<T, 'sow'|'soh'> & {shadowOffset?: ShadowStyleIOS['shadowOffset']}
  : T

export type HandleTSOX<T> = Required<T> extends ({tsow: any} | {tsoh: any})
  ? Omit<T, 'tsow'|'tsoh'> & {textShadowOffset?: TextStyle['textShadowOffset']}
  : T

export type HandleSO<T> = HandleTSOX<HandleSOX<T>>

export type HandleShadowOffset<T> = Required<T> extends {shadowOffset: any}
  ? Omit<T, 'shadowOffset'> & {sow?: NonNullable<ShadowStyleIOS['shadowOffset']>['width'], soh?: NonNullable<ShadowStyleIOS['shadowOffset']>['height']}
  : T

export type HandleTextShadowOffset<T> = Required<T> extends {textShadowOffset: any}
  ? Omit<T, 'textShadowOffset'> & {tsow?: NonNullable<TextStyle['textShadowOffset']>['width'], tsoh?: NonNullable<TextStyle['textShadowOffset']>['height']}
  : T

export type HandleOffset<T> = HandleTextShadowOffset<HandleShadowOffset<T>>

/**
 * Restore shorthand style prop keys
 *
 * ex.) `{m: number | string, f: number}` => `{margin: number | string, flex: number}`
 */
export type Restore<T> = ExtractBrand<T> extends never ? FilterUnknown<MapKey<HandleSO<NonNullable<T>>, AllSSMap>> extends infer A ? A : never : ExtractBrand<T>

/**
 * Shorten style prop keys
 *
 * ex.) `{margin: number | string, flex: number}` => `{m: number | string, f: number}`
 */
export type Shorten<T> = SSWithBrand<HandleOffset<FilterUnknown<MapKey<NonNullable<T>, AllSSMapOp>>> extends infer A ? A : never, T>

export type Value = Animated.Value

export type AnimatedInterpolation = Animated.AnimatedInterpolation

export type WithAnimatedValue<T> = (
  T extends object
    ? { [K in keyof T]?: WithAnimatedValue<T[K]> }
    : T extends (infer P)[]
    ? WithAnimatedValue<P>[]
    : T | Value | AnimatedInterpolation
)