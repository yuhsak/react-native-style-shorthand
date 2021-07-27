import type { ComponentProps } from 'react'

import {
  ActivityIndicator as RNActivityIndicator,
  Button as RNButton,
  FlatList as RNFlatList,
  Image as RNImage,
  ImageBackground as RNImageBackground,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Modal as RNModal,
  Picker as RNPicker,
  RefreshControl as RNRefreshControl,
  SafeAreaView as RNSafeAreaView,
  ScrollView as RNScrollView,
  SectionList as RNSectionList,
  Switch as RNSwitch,
  Text as RNText,
  TextInput as RNTextInput,
  TouchableHighlight as RNTouchableHighlight,
  TouchableOpacity as RNTouchableOpacity,
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  View as RNView,
  DrawerLayoutAndroid as RNDrawerLayoutAndroid,
  TouchableNativeFeedback as RNTouchableNativeFeedback,
  InputAccessoryView as RNInputAccessoryView,
  Animated as RNAnimated,
} from 'react-native'

import { enhanceViewWithRef, enhanceImageWithRef, enhanceTextWithRef, enhanceAnimatedViewWithRef, enhanceAnimatedTextWithRef, enhanceAnimatedImageWithRef } from './hoc'

/**
 * ActivityIndicator Component with style shorthand
 */
export const ActivityIndicator = enhanceViewWithRef(RNActivityIndicator, { memoize: false })

/**
 * Button Component with style shorthand
 */
export const Button = enhanceViewWithRef(RNButton, { memoize: false })

/**
 * FlatList Component with style shorthand
 */
export const FlatList = enhanceViewWithRef(RNFlatList, { memoize: false })

/**
 * Image Component with style shorthand
 */
export const Image = enhanceImageWithRef(RNImage, { memoize: false })

/**
 * ImageBackground Component with style shorthand
 */
export const ImageBackground = enhanceImageWithRef(RNImageBackground, { memoize: false })

/**
 * KeyboardAvoidingView Component with style shorthand
 */
export const KeyboardAvoidingView = enhanceViewWithRef(RNKeyboardAvoidingView, { memoize: false })

/**
 * Modal Component with style shorthand
 */
export const Modal = enhanceViewWithRef(RNModal, { memoize: false })

/**
 * Picker Component with style shorthand
 */
export const Picker = enhanceViewWithRef(RNPicker, { memoize: false })

/**
 * RefreshControl Component with style shorthand
 */
export const RefreshControl = enhanceViewWithRef(RNRefreshControl, { memoize: false })

/**
 * SafeAreaView Component with style shorthand
 */
export const SafeAreaView = enhanceViewWithRef(RNSafeAreaView, { memoize: false })

/**
 * ScrollView Component with style shorthand
 */
export const ScrollView = enhanceViewWithRef(RNScrollView, { memoize: false })

/**
 * SectionList Component with style shorthand
 */
export const SectionList = enhanceViewWithRef(RNSectionList, { memoize: false })

/**
 * Switch Component with style shorthand
 */
export const Switch = enhanceViewWithRef(RNSwitch, { memoize: false })

/**
 * Text Component with style shorthand
 */
export const Text = enhanceTextWithRef(RNText, { memoize: false })

/**
 * TextInput Component with style shorthand
 */
export const TextInput = enhanceTextWithRef(RNTextInput, { memoize: false })

/**
 * TouchableHighlight Component with style shorthand
 */
export const TouchableHighlight = enhanceViewWithRef(RNTouchableHighlight, { memoize: false })

/**
 * TouchableOpacity Component with style shorthand
 */
export const TouchableOpacity = enhanceViewWithRef(RNTouchableOpacity, { memoize: false })

/**
 * TouchableWithoutFeedback Component with style shorthand
 */
export const TouchableWithoutFeedback = enhanceViewWithRef(RNTouchableWithoutFeedback, { memoize: false })

/**
 * View Component with style shorthand
 */
export const View = enhanceViewWithRef(RNView, { memoize: false })

/**
 * DrawerLayoutAndroid Component with style shorthand
 */
export const DrawerLayoutAndroid = enhanceViewWithRef(RNDrawerLayoutAndroid, { memoize: false })

/**
 * TouchableNativeFeedback Component with style shorthand
 */
export const TouchableNativeFeedback = enhanceViewWithRef(RNTouchableNativeFeedback, { memoize: false })

/**
 * InputAccessoryView Component with style shorthand
 */
export const InputAccessoryView = enhanceViewWithRef(RNInputAccessoryView, { memoize: false })

/**
 * Animated with style shorthand
 */
export const Animated = {
  ...RNAnimated,
  View: enhanceAnimatedViewWithRef(RNAnimated.View, { memoize: false }),
  Image: enhanceAnimatedImageWithRef(RNAnimated.Image, { memoize: false }),
  Text: enhanceAnimatedTextWithRef(RNAnimated.Text, { memoize: false }),
  ScrollView: enhanceAnimatedViewWithRef(RNAnimated.ScrollView, { memoize: false }),
  FlatList: enhanceAnimatedViewWithRef(RNAnimated.FlatList, { memoize: false }),
  SectionList: enhanceAnimatedViewWithRef(RNAnimated.SectionList, { memoize: false }),
}
