import React, {useEffect, useState} from 'react'
// import axios from 'axios'
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {PokeContainer} from '../components/Poke-Container'
import Icon from 'react-native-vector-icons/FontAwesome'
import {getRealm} from '../services/Realm'

const styles = StyleSheet.create({
  loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  form: {
    flexDirection: 'row',
    marginTop: 10,
    padding: 20,
    height: '15%',
  },
  input: {
    flex: 1,
    padding: 15,
    borderRadius: 4,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFF',
  },
  submit: {
    backgroundColor: '#6bd4c1',
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 4,
    padding: 14,
  },
  list: {
    flex: 1,
  },
})

const getPokeList = async page => {
  const data = await (await axios.get(page)).data
  return {data}
}

const getPokeInfoById = async pokeId => {
  const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
  return result.data
}

const getSpeciesInfo = async pokeId => {
  const result = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${pokeId}`,
  )
  return result.data
}

function createData (id, nome, types, sprite) {
  return {
    id: id,
    nome: nome,
    types: types,
    sprite: sprite,
  }
}

export default () => {
  const initialLink = 'https://pokeapi.co/api/v2/pokemon?limit=10'
  const [pokes, setPokes] = useState([])
  const [page, setPage] = useState(initialLink)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const renderFooter = () => {
    if (!loading) return null
    return (
      <View style={styles.loading}>
        <ActivityIndicator color='#000' />
      </View>
    )
  }


  const readPokemon = async () => {
    const Realm = await getRealm()
    setPokes([Realm.objects('pokemon'))
    // Realm.close()
  }

  const handleRefresh = () => {
    setPage(initialLink)
    setRefreshing(true)
    setPokes([])
  }
  useEffect(() => {
    async function callReadPokemonFunction () {
      await readPokemon()
    }
    callReadPokemonFunction()
  }, [])

  useEffect(() => {
    if (page === initialLink && refreshing) {
      ;() => callListFromApi()
    }
  }, [page])

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#ff3000', '#f00000']}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.form}>
          <TextInput
            placeholderTextColor='#999'
            placeholder='Nome do Pokemon'
            style={styles.input}
          />
          <TouchableOpacity style={styles.submit}>
            <Icon name='search' size={20} color='#333' />
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          <FlatList
            data={pokes}
            keyExtractor={i => `${i.id}`}
            contentContainerStyle={{padding: 20}}
            renderItem={({item}) => {
              return <PokeContainer poke={item} />
            }}
            // onEndReached={callListFromApi}
            // onEndReachedThreshold={0.1}
            // showsHorizontalScrollIndicator={true}
            // ListFooterComponent={renderFooter}
            // refreshing={refreshing}
            // onRefresh={handleRefresh}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}
