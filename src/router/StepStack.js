import React from 'react'
import {View} from 'react-native'

export default (props) => {
     return (
         <View style={{flex: 1}}>
             <Text>oi</Text>
             {props.children}
         </View>
     )
}