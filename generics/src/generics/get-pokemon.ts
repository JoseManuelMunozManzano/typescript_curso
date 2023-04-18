import axios from 'axios';
import { Pokemon } from '../interfaces';

// Regresando promesas con async - await que resuelve un tipo Pokemon: Promise<Pokemon>
// async, por tanto, transforma una función para que devuelva una promesa.
export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  // Con await esperamos que la promesa se resuelva y seguimos ejecutando el programa.
  // Como get es de tipo genérico indicamos el tipo Pokemon.
  // IMPORTANTE: NO estamos transformando la respuesta. Esta es la misma.
  //    Indicamos a TS como luce el objeto, por lo que ahora tenemos la ayuda de TS de autocompletado
  //    y propiedades disponibles.
  //    Por ejemplo, en la interface he definido la propiedad picture, pero como esta NO existe en la respuesta,
  //    si la selecciono del desplegable que me da TS, el resultado será undefined.
  const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

  //console.log(data.abilities[0].ability.url);

  // Con esta instrucción se dispara el .catch
  // if (true) throw new Error('Auxilio');

  return data;
};
