export const PokemonSchema = {
  name: 'pokemon',
  primaryKey: 'id',
  properties: {
    id: {type: 'int', indexed: true},
    name: 'string',
    types: 'string[]',
    sprite: 'string',
    description: 'string?',
    favorite: {type: 'bool?', default: false}
  },
}
