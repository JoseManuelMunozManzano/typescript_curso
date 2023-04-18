import { getPokemon } from './generics/get-pokemon';

// Obteniendo la resolución de la promesa con .then
// Obteniendo el error en el .catch
getPokemon(4)
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error))
  .finally(() => console.log('Fin de getPokemon'));
