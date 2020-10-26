import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import App from '../view/App'
import Pokedex from '../view/Pokedex'
import { DetailsPokemon } from '../view/Details'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName='PokeDetail'
      screenOptions={{headerShown: false}}>
      <Stack.Screen name='App' component={App} />
      <Stack.Screen name='Pokedex' component={Pokedex} />
      <Stack.Screen name='PokeDetail' component={DetailsPokemon}/>
    </Stack.Navigator>
  )
}
