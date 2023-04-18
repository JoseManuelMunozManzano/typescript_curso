import { getPokemon } from './generics/get-pokemon';

// Obteniendo la resolución de la promesa con .then
// Obteniendo el error en el .catch
// Gracias a TS tengo el autocompletado de Pokemon aquí.
getPokemon(4)
  .then((pokemon) => console.log(pokemon.sprites.front_default))
  .catch((error) => console.log(error))
  .finally(() => console.log('Fin de getPokemon'));
