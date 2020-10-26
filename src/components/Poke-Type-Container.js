import React from 'react'
import {View, StyleSheet} from 'react-native'
import {ButtonType} from './ButtonType'

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  typeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export const PokeTypeContainer = ({poke}) => {
  return (
    <View style={styles.subContainer}>
      <View
        style={[
          styles.typeContainer,
          {
            justifyContent:
              poke.types.length == 2 ? 'space-evenly' : 'flex-start',
          },
        ]}>
        <ButtonType item={poke.types[0]} />
        {poke.types[1] ? <ButtonType item={poke.types[1]} /> : null}
      </View>
    </View>
  )
}
