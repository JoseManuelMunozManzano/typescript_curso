//https://www.typescriptlang.org/docs/handbook/decorators.html
// Los decoradores son funciones que expanden la funcionalidad de una clase u otra función.
// Se ejecutan en tiempo de transpilación del código.
// No suele ser normal crearlos, sino usarlos.
// Claros exponentes del uso de los decoradores serían los frameworks Angular y Nest.
import { Pokemon, Pokemon_2, Pokemon_3, Pokemon_4 } from './classes/pokemon';

const charmander = new Pokemon('Charmander');
//console.log(charmander);

const pikachu = new Pokemon_2('Pikachu');
//console.log(pikachu);

// Aquí es donde intentaremos expandir nuestra clase Pokemon_2 y nos indicará, gracias a nuestro decorador,
// que el objeto no es extensible.
// Como TS sabe que no existe una propiedad llamada customName da error. Para evitar ese error
// indicamos el as any.

//(Pokemon_2.prototype as any).customName = 'Meow';

const bulbasaur = new Pokemon_3('Bulbasaur');
//bulbasaur.savePokemonToDB(5);

const venusaur = new Pokemon_4('Venusaur');
console.log(venusaur);

venusaur.publicApi = 'No me deja hacerlo por el decorador. Para que me deje, indicar @readonly(false)';
