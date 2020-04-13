# react-native-style-shorthand

Never be tired of styling components.

## Motivation

It's really comfortable to style an app in css-like way with `react-native`, but I sometimes feel quite tired of writing styles such like `backgroundColor`, `marginBottom`, `borderWidth` repeatedly for hundred times.

That's why I made this small module to prevent myself from repeating it.

## What is this?

This is some set of higher order and pre-defined components which would help you to do styling in more efficient way.

For example, we usually do something like this when we give some style for our components.

```tsx
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'royalblue'
  }
})

export default function App() {

  return (
    <View style={style.container}>
      <Text style={style.text}>RNSS</Text>
    </View>
  )

}
```

With pre-defined components from `react-native-style-shorthand` (RNSS), now we can apply the same style in this way.

```tsx
import React from 'react'
import {View, Text} from 'react-native-style-shorthand'

export default function App() {

  return (
    <View f={1} jc='center' ai='center'>
      <Text c='#fff' ftsz={20} bgc='royalblue'>RNSS</Text>
    </View>
  )

}
```

Every component accepts shothanded style props as a part of it's props, and renders as if they're given as `style` prop.

Here is an example for pairs of style prop and it's corresponding shorthand, check out [catalog.md](catalog.md) to get the list of all available shorthands.

|Style|Shorthand|
|:--|:--|
|flex|f|
|justifyContent|jc|
|alignItems|ai|
|margin|m|
|padding|p|
|width|w|
|height|h|

## Install

```sh
$ npm install react-native-style-shorthand --save
```

Compatible with

  - `react-native` >= v0.60
  - `expo` >= v36.0 

and also works with `react-native-web`.

## Usage

### 1. Pre-defined components

As shown above, RNSS exports pre-defined components for all the atomic components from `react-native`.

You can easily import and use them to work with style shorthands.

```jsx
import React from 'react'

import {
  Text,
  View,
  ScrollView,
  SafeAreaView
} from 'react-native-style-shorthand'

const LongView:React.FC = ({children}) => (
  <View jc='center' ai='center' h={1200}>
    {children}
  </View>
)

export default function App() {

  return (
    <SafeAreaView f={1} bgc='#aaa'>
      <ScrollView>
        <LongView>
          <Text c='blue' bgc='#fff'>Long View</Text>
        </LongView>
      </ScrollView>
    </SafeAreaView>
  )

}
```

#### Working with `StyleSheet`

If you want to work with `StyleSheet` to separete the styles and components, just define styles as usually you do but with shorthands and provide them through object spreading.

For TypeScript, there is `StyleSheet` utility from RNSS which is typed for shorthands.

```tsx
import React from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native-style-shorthand'

export default function App() {

  // To avoid object re-creation by re-render in special case,
  // just use StyleSheet.useMemo().
  // Then style object will be memoized by it's value.
  const style = StyleSheet.create({
    container: {
      f: 1,
      jc: 'center',
      ai: 'center',
      p: 20
    },
    text: {
      c: '#fff',
      ftsz: 20,
      bgc: 'blue'
    }
  })

  return (
    <View {...style.container}>
      <Text {...style.text}>RNSS</Text>
    </View>
  )

}
```

#### Working with `contentContainerStyle`

Since some components accept style prop as `contentContainerStyle` for it's inner view , RNSS provides a special prop `contentContainerSS` for convinience.

The style shorthand object given for `contentContainerSS` prop will be automatically restored into regular style object and will be passed to 
`contentContainerStyle` prop.

```tsx
import React from 'react'

import {
  Text,
  ScrollView
} from 'react-native-style-shorthand'

export default function App() {
  
  return (
    <ScrollView f={1} bgc='#fff' contentContainerSS={{bgc: 'blue'}}>
      <Text>contentContainerSS</Text>
    </ScrollView>
  )

}
```

#### Working with `Ref`

You could pass ref object as usual you do.

If you use TypeScript and want to type the ref object, there is an utility `RefType` to extract the type of it's inner component.

```tsx
import React from 'react'

import {
  ScrollView
} from 'react-native-style-shorthand'

import type {
  RefType
} from 'react-native-style-shorthand'

export default function App() {

  // ref: React.MutableRefObject<ScrollView>
  const ref = React.useRef<RefType<typeof ScrollView>>(null)

  return (
    <ScrollView ref={ref} />
  )

}
```

#### *TypeScript:* Types for shorthands

For in case that we define a component which accepts style shorthand props, there are some utility types for working with shorthands.

RNSS exports namespace `SS` including typical style shorthands props.

```ts
namespace SS {
  type Transforms: Shorthand for TransformsStyle,
  type Flex:       Shorthand for FlexStyle,
  type ShadowIOS:  Shorthand for ShadowStyleIOS,
  type View:       Shorthand for ViewStyle,
  type Text:       Shorthand for TextStyle,
  type TextBase:   Shorthand for Text only specific style (color, fontSize, etc...),
  type Image:      Shorthand for ImageStyle,
  type ImageBase:  Shorthand for Image only specific style (resizeMode, etc...),
}
```

And also `FC` type for defining functional component.

```ts
type FC = <P, SS>React.FC<PropsWithStyleShorthands<P, SS>>
```

Now you can type your component acceptable for style shorthand props.

```tsx
import React from 'react'

import {
  View,
  Text
} from 'react-native-style-shorthand'

import type {
  FC,
  SS
} from 'react-native-style-shorthand'

type Props = {
  textSS: SS.Text
}

const TextWrapper:FC<Props, SS.View> = ({children, textSS, ...viewSS}) => (

  <View {...viewSS}>
    <Text {...textSS}>
      {children}
    </Text>
  </View>

)

export default function App() {

  return (
      <TextWrapper f={1} p={20} textSS={{bgc: 'blue', c: '#fff'}}>
        TextWrapper
      </TextWrapper>
  )

}
```

#### *TypeScript:* Generic components

As you know, some of components from `react-native` are Generic.
For example, the `FlatList` is the one of generic components which could be typed for it's data.

RNSS exports `FlatList` as a pre-defined component, but it's typed as `FlatList<unknown>`.

If you want to make it correctly typed along with the data, just use `enhanceFlatList()` to create your own.

```tsx
import React from 'react'

import {
  FlatList
} from 'react-native'

import {
  enhanceFlatList
} from 'react-native-style-shorthand'

type Item = {
  title: string,
  content: string
}

const TypedFlatList = enhanceFlatList<Item>(FlatList)
```

(To type `SectionList`, we also have `enhanceSectionList` function.)

### 2. Custom components

Without using pre-defined components, you also could define custom components using `RNSS.fc` with which we can make the components acceptable for style shorthand props and automatically restore them into regular style object for it's inner component.

For TypeScript, you can pass it's component props for the first type argument, and desired style shorthand for the second.


```tsx
import React from 'react'

import {
  View,
  Text
} from 'react-native'

import {
  fc
} from 'react-native-style-shorthand'

import type {
  SS
} from 'react-native-style-shorthand'

const StyleShorthandView = fc<{text: string}, SS.View>((text, ...props) => (

  // props.style will be a valid ViewStyle object
  // which is managed by RNSS.fc
  <View style={props.style}>
    <Text>{text}</Text>
  </View>

))

export default function App() {

  return (
    // You can pass ViewStyle shorthand props
    <StyleShorthandView f={1} bgc='#aaa' text='custom fc' />
  )

}

```

#### Handling shorthands manually

Sometimes we want to define a component which accepts a style shorthand prop for it's inner component (typically when we're going to make some wrapper component), there is `useRestoredStyle` hook to handle shorthands manually.

```tsx
import React from 'react'

import {
  View,
  Text
} from 'react-native'

import {
  fc,
  useRestoredStyle
} from 'react-native-style-shorthand'

import type {
  SS
} from 'react-native-style-shorthand'

type Props = {
  textSS: SS.Text
}

const TextWrapper = fc<Props, SS.View>(({style, textSS}) => {

  // Note that the textStyle value will automatically
  // be memoized by it's values.
  // Pass {memoize: false} for 2nd argument if you want to prepend it.
  const textStyle = useRestoredStyle(textSS)
  // or
  // const textStyle = useRestoredStyle(textSS, {memoize: false})

  return (
    <View style={style}>
      <Text style={textStyle}>
        {text}
      </Text>
    </View>
  )

})

export default function App() {

  return (
    <TextWrapper m={5} p={20} textSS={{ftsz: 18}}>
      TextWrapper
    </TextWrapper>
  )

}
```

### 3. Custom components with `Ref`

There is `RNSS.forwardRef()` function which works just like `React.forwardRef()`, but making component acceptable for style shorthand props.

```tsx
import React from 'react'

import {
  Text,
  ScrollView
} from 'react-native'

import {
  forwardRef
} from 'react-native-style-shorthand'

import type {
  SS
} from 'react-native-style-shorthand'

type Props = {
  text: string
}

const ScrollWrapper = forwardRef<ScrollView, Props, SS.View>(({style, text}, ref) => (

  <ScrollView ref={ref} style={style}>
    <Text>{text}</Text>
  </ScrollView>

))

export default function App() {

  const ref = React.ref<ScrollView>(null)

  return (
    <ScrollWrapper ref={ref} f={1} p={20} text='fowardRef example' />
  )

}
```

## Contibuting

Always welcome for any contributing!

### 1. Install dependencies for the module itself

```sh
$ cd react-native-style-shorthand
$ npm ci
```

Then run `npm start` to launch tsc compiler with --watch option.

### 2. Install dependencies for example project

```sh
$ cd example
$ npm ci
```

Then run `npm start` to launch metro bundler from expo.

### 3. Update some code and see if it works in example app

Then run `npm test` at the root directory to run tests by jest.

(Tests are currently only available for general functions and hooks.)