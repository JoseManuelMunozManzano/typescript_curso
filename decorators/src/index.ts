//https://www.typescriptlang.org/docs/handbook/decorators.html
// Los decoradores son funciones que expanden la funcionalidad de una clase u otra función.
// Se ejecutan en tiempo de transpilación del código.
// No suele ser normal crearlos, sino usarlos.
// Claros exponentes del uso de los decoradores serían los frameworks Angular y Nest.
import { Pokemon } from './classes/pokemon';

const charmander = new Pokemon('Charmander');
console.log(charmander);
