import Realm from 'realm'
import { PokemonSchema } from '../model/PokemonSchema'

export function getRealm(){
    return Realm.open({
        path: 'Pokedex',
        schema: [
            PokemonSchema
        ]
    })
}