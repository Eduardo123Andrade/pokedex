import React from 'react'
import {View, Text} from 'react-native'
import pokeball from './../assets/pokeball-animation.json'
import {getRealm} from './../services/Realm'
import Axios from 'axios'

const getPokeInfoById = async pokeId => {
  const result = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
  return result.data
}

async function loadPokemons () {
  const result = await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
  const list = result.data.results
  for (let item of list) await savePokemon(item)
}

async function savePokemon (x) {
  let pokeId = x.url.split('/')[6]
  let {name, sprites, types} = await getPokeInfoById(pokeId)
  let realTypes = types.map(y => y.type.name)
  let poke = {
    id: Number(pokeId),
    name: name,
    types: realTypes,
    sprite: sprites.front_default,
  }

  const Realm = await getRealm()
  Realm.write(() => {
    Realm.create('pokemon', poke)
  })
}

export default ({navigation}) => {
  async function findPokes () {
    const Realm = await getRealm()
    const pokes = Realm.objects('pokemon')
    // Realm.write(() => {
    //   // console.length('here')
    //   Realm.delete(pokes)
    // })
    if (pokes.length === 0) await loadPokemons()
    Realm.close()
    navigation.navigate('Pokedex')
  }
  findPokes()

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Aguarde enquanto preparamos sua Pokedex</Text>
      {/* <Lottie source={pokeball} autoPlay loop resizeMode='contain' autoSize/> */}
    </View>
  )
}
