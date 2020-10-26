import React, {useState} from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {PokeContainer} from '../components/Poke-Container'
import {PokeImage} from '../components/Poke-Image'

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    height: 200,
    margin: 25,
    // padding: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  loaded: {
    width: '95%',
    height: '95%',
    padding: 20,
  },
  loading: {width: 0, height: 0},
  descricao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
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

export const DetailsPokemon = () => {
  const [loading, setLoading] = useState(true)
  //   const loading = true
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#ff3000', '#f00000']}
      style={{flex: 1}}>
      {/* <Text>Ola</Text> */}
      {/* <PokeContainer /> */}
      <View style={styles.image}>
        {/* <PokeImage poke={defaultPoke} /> */}

        <Image
          style={loading ? styles.loading : styles.loaded}
          source={{uri: defaultPoke.sprite}}
          //   onLoadStart={() => setLoading(true)}
          onLoadEnd={() => {
            setLoading(false)
          }}
        />
      </View>

      <View style={styles.descricao}>
        <Text>ola</Text>
      </View>
      <View>
        <Text>ola</Text>
      </View>
    </LinearGradient>
  )
}
