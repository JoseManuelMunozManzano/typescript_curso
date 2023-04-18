import axios from 'axios';

// Regresando promesas con async - await que resuelve un número: Promise<number>
// async, por tanto, transforma una función para que devuelva una promesa.
export const getPokemon = async (pokemonId: number) => {
  // Con await esperamos que la promesa se resuelva y seguimos ejecutando el programa.
  const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

  console.log(resp);

  // Con esta instrucción se dispara el .catch
  // if (true) throw new Error('Auxilio');

  return 1;
};
