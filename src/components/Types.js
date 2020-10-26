export function getTypes (key = 'dark') {
  const types = {
    WATER: '#6890F0',
    NORMAL: '#A8A878',
    ELECTRIC: '#F8D030',
    FIGHTING: '#C03028',
    GROUND: '#E0C068',
    PSYCHIC: '#F85888',
    ROCK: '#B8A038',
    DARK: '#705848',
    STEEL: '#B8B8D0',
    FIRE: '#F08030',
    GRASS: '#78C850',
    ICE: '#89D8D8',
    POISON: '#A040A0',
    FLYING: '#A890F0',
    BUG: '#A8B820',
    GHOST: '#705898',
    DRAGON: '#7038F8',
    FAIRY: '#EE99EE',
  }
  if (types[key.toUpperCase()] === undefined) console.error(key)

  return types[key.toUpperCase()]
}
