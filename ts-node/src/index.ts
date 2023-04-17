// IMPORTS Y EXPORTS
// Es una manera de trabajar con módulos
//
// Importar módulos.
// Hay que usar export en la clase Hero para poder importarlo aquí.
// Indicar que esto es propio de JS, no de TS.
import { Hero } from './classes/Hero';

const ironman = new Hero('Iron Man', 1, 45);
console.log(ironman);
