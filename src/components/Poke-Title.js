import React, {useState, useEffect} from 'react'
import {Text, Vibration, View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {getRealm} from '../services/Realm'

const styles = StyleSheet.create({
  txtNome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})

export const PokeTile = ({pokeInput}) => {
  const [poke, setPoke] = useState(pokeInput)

  const changeFavoriteStatus = async () => {
    const Realm = await getRealm()
    const pokeDb = Realm.objectForPrimaryKey('pokemon', poke.id)
    Realm.write(() => {
      pokeDb.favorite = !pokeDb.favorite
      Realm.create('pokemon', pokeDb, 'modified')
    })
    Vibration.vibrate(50)
  }

  useEffect(() => {
    async function favorite () {
      const Realm = await getRealm()
      setPoke(Realm.objectForPrimaryKey('pokemon', pokeInput.id))
    }
    favorite()
  }, [poke])

  return (
    <View style={styles.title}>
      <Text style={styles.txtNome}>
        #{('000' + poke.id).slice(-3)} {`${poke.name}`.toLocaleUpperCase()}
      </Text>
      <Icon
        name={poke.favorite ? 'star' : 'star-o'}
        size={25}
        color={poke.favorite ? '#eaef1d' : '#C2C2C2'}
        onPress={changeFavoriteStatus}
      />
    </View>
  )
}
