import React from 'react'

import {
  View as RNView,
  Text as RNText,
  FlatList as RNFlatList
} from 'react-native'

import type {
  TextStyle,
} from 'react-native'

import {
  // HOC
  fc,
  forwardRef,
  enhance,
  enhanceWithRef,
  enhanceFlatList,
  // Pre-Defined Components
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Picker,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  DrawerLayoutAndroid,
  TouchableNativeFeedback,
  InputAccessoryView,
  Animated,
  // Hooks
  useRestoredStyle,
  // General Functions
  StyleSheet
} from 'react-native-style-shorthand'

import type {
  SS,
  FC,
  RefType
} from 'react-native-style-shorthand'

// Pre-defined component
const PredefinedComponent:React.FC = props => (
  <View f={1} jc='center' ai='center' {...props} />
)

// With StyleSheet
const WithStyleSheet:React.FC = () => {

  const style = StyleSheet.create({
    container: {
      m: 10,
      bgc: 'turquoise',
      p: 10
    },
    text: {
      c: '#fff'
    }
  })

  return (
    <View {...style.container}>
      <Text {...style.text}>WithStyleSheet</Text>
    </View>
  )

}

// contentContainerStyle
const ContentContainerStyle:React.FC = props => (
  <ScrollView f={1} contentContainerSS={{p: 20}} {...props} />
)

// Text wrapper
const TextWrapper:FC<{textSS?: SS.Text}, SS.View> = ({children, textSS, ...viewSS}) => (
  <View {...viewSS}>
    <Text {...textSS}>{children}</Text>
  </View>
)

// Typed generic component
const TypedFlatList = enhanceFlatList<{key: string, text: string}>(RNFlatList)

// Custom component
const CustomComponent = fc<{textSS?: SS.Text}, SS.View>(({children, style, textSS}) => {

  const textStyle = useRestoredStyle(textSS)

  return (
    <RNView style={style}>
      <RNText style={textStyle}>{children}</RNText>
    </RNView>
  )
  
})

// Another way for typing
const CustomComponent2:FC<{textSS?: SS.Text}, SS.View> = fc(({children, style, textSS}) => {

  const textStyle = useRestoredStyle(textSS, {memoize: false})

  return (
    <RNView style={style}>
      <RNText style={textStyle}>{children}</RNText>
    </RNView>
  )
})

// Custom forwardRef
const CustomWithRef = forwardRef<RNText, {text: string}, SS.Text>(({text, style}, ref) => (
  <Text ref={ref} style={style}>{text}</Text>
))


// Define component, and then enhance with style shorthand
const InnerComponent:React.FC<{text: string, style?: TextStyle}> = ({style, text}) => (
  <RNText style={style}>{text}</RNText>
)

// const WrappedComponent = fc(InnerComponent)
// This `fc` actually works fine with JS, but for TS, `fc` can't type it correctly.
// You can use `enhance` func instead of `fc`.
const WrappedComponent = enhance(InnerComponent)

export default function App() {

  const exampleRef = React.useRef<RefType<typeof SafeAreaView>>(null)

  const customRef = React.useRef<RNText>(null)

  return (
    <SafeAreaView f={1} bgc='#ccc' ref={exampleRef}>
      <ContentContainerStyle>
        <PredefinedComponent>
          <Text c='#fff' ftw='bold' bgc='royalblue' p={10} m={10} mb={20}>react-native-style-shorthand</Text>
          <WithStyleSheet />
          <TextWrapper bw={2} bc='#fff' bgc='deepskyblue' m={10} textSS={{p: 5}}>TextWrapper</TextWrapper>
          <CustomComponent bw={1} p={5} m={10} textSS={{ftw: 'bold'}}>CustomComponent</CustomComponent>
          <CustomComponent2 m={10}>CustomComponent2</CustomComponent2>
          <CustomWithRef ref={customRef} m={10} bgc='#fff' text='forwardRef' />
          <WrappedComponent m={10} text='WrappedComponent' />
        </PredefinedComponent>
      </ContentContainerStyle>
      <View f={.3}>
        <TypedFlatList
          data={[{key: '0', text: 'Example'}, {key: '1', text: 'for'}, {key: '2', text: 'TypedFlatList'}]}
          renderItem={({item})=> <TextWrapper ai='center' pv={10}>{item.text}</TextWrapper>}
          ItemSeparatorComponent={() => <View bgc='#999' h={1} />}
          bgc='#bbb'
        />
      </View>
    </SafeAreaView>
  )

}