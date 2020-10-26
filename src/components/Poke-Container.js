import React from 'react'
import {View, StyleSheet, TouchableOpacity, Vibration} from 'react-native'
import {PokeImage} from './Poke-Image'
import {PokeTile} from './Poke-Title'
import {PokeTypeContainer} from './Poke-Type-Container'
import {getRealm} from './../services/Realm'

const styles = StyleSheet.create({
  Component: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#FFF',
    marginBottom: 15,
    flexDirection: 'row',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'column',
  },
})

const defaultPoke = {
  id: '0262',
  name: 'Mightyena',
  descricao:
    'Pokemon mais maravilindo de todos Pokemon mais maravilindo de todos Pokemon mais maravilindo de todos',
  types: ['Dark'],
  sprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png',
  favorite: true,
}

export const PokeContainer = ({poke = defaultPoke}) => {
  const changeFavoriteStatus = async () => {
    const Realm = await getRealm()
    const pokeDb = Realm.objectForPrimaryKey('pokemon', poke.id)
    Realm.write(() => {
      pokeDb.favorite = !pokeDb.favorite
      Realm.create('pokemon', pokeDb, 'modified')
    })
    Vibration.vibrate(50)
  }
  return (
    <TouchableOpacity
      onPress={() => console.warn('clicado')}
      onLongPress={changeFavoriteStatus}
      activeOpacity={0.98}
      style={styles.Component}>
      <PokeImage poke={poke} />
      <View style={styles.subContainer}>
        <PokeTile pokeInput={poke} />
        <PokeTypeContainer poke={poke} />
      </View>
    </TouchableOpacity>
  )
}
