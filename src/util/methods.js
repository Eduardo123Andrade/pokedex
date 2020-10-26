import {getRealm} from './../services/Realm'
import {Vibration} from 'react-native'

export const changeFavoriteStatus = async (nameSchema, item) => {
  const Realm = await getRealm()
  const itemDb = Realm.objectForPrimaryKey(nameSchema, item.id)
  Realm.write(() => {
    itemDb.favorite = !itemDb.favorite
    Realm.create('pokemon', pokeDb, 'modified')
  })
  Vibration.vibrate(50)
}
