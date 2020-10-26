import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaView, StyleSheet} from 'react-native'
import Stack from './Stack'

const style = StyleSheet.create({
  Container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
})

export const Router = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </SafeAreaView>
  )
}
