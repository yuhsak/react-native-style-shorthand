import type {
  SS
} from '../src/types'

const containerSS:SS.View = {
  m: 20,
  p: 20
}

const containerStyle = {
  margin: 20,
  padding: 20
}

const shadowContainerSS:SS.View = {
  m: 30,
  f: 1,
  sow: 5,
  soh: 5
}

const shadowContainerStyle = {
  margin: 30,
  flex: 1,
  shadowOffset: {
    width: 5,
    height: 5
  }
}

const bgcContainerSS:SS.View = {
  m: 5,
  bgc: '#fff'
}

const bgcContainerStyle = {
  margin: 5,
  backgroundColor: '#fff'
}

export const Shorthand = {
  container: containerSS,
  shadowContainer: shadowContainerSS,
  bgcContainer: bgcContainerSS,
  all: {...containerSS, ...shadowContainerSS, ...bgcContainerSS}
}

export const Style = {
  container: containerStyle,
  shadowContainer: shadowContainerStyle,
  bgcContainer: bgcContainerStyle,
  all: {...containerStyle, ...shadowContainerStyle, ...bgcContainerStyle}
}