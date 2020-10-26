import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import {getTypes} from './Types'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  type: {
    height: 20,
    width: 70,
    borderRadius: 4,
    marginTop: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  txtType: {
    color: '#FFFFFF',
  },
})

export const ButtonType = ({item}) => {
  return (
    <TouchableOpacity
      style={[
        styles.type,
        {backgroundColor: getTypes(item)? getTypes(item) : '#000'},
      ]}>
      <Text style={styles.txtType}>{`${item}`.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}
