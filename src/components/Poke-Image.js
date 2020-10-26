import React, {useState} from 'react'
import {Image, View, StyleSheet, ActivityIndicator} from 'react-native'

const styles = StyleSheet.create({
  loaded: {width: 100, height: 100},
  loading: {width: 0, height: 0},
  imgLoading: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
  },
})

export const PokeImage = ({poke}) => {
  const [loading, setLoading] = useState(false)
  return (
    <View>
      <Image
        style={loading ? styles.loading : styles.loaded}
        source={{uri: poke.sprite}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => {
          setLoading(false)
          // setTimeout(() => setLoading(false), 0)
        }}
      />
      {loading ? (
        <View style={styles.imgLoading}>
          <ActivityIndicator color='#000' />
        </View>
      ) : null}
    </View>
  )
}
