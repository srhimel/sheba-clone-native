import { StyleSheet, Text as RNText, View } from 'react-native'
import React from 'react'
import textPresets from './text.presets'

export default function Text({ children, preset = 'p', style }) {
  const styles = StyleSheet.compose(textPresets[preset], style)
  return (
    <RNText style={styles}>{children}</RNText>
  )
}

