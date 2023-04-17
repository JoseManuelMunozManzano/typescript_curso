// IMPORTS Y EXPORTS
// Es una manera de trabajar con módulos
//
// Importar módulos.
// Hay que usar export en la clase Hero para poder importarlo aquí.
// Indicar que esto es propio de JS, no de TS.
import { Hero } from './classes/Hero';
// Alias
// Si tenemos conflicto entre una variable y algo que importemos, podemos poner un alias para evitar este conflicto.
// Indicar que puede ser complicado cambiar el nombre de la clase porque puede ser muy usada en nuestra aplicación.
// Igual nuestra variable que da conflicto puede ser muy usada en este archivo.
import { Client as C_Client } from './classes/Client';
// Otra forma de exportar es exportar todo con * y usar un alias completo a todo lo que exporta el módulo
import * as SuperSport from './classes/Sport';
// Para la importación por defecto podemos poner el nombre que queramos aquí. Hace referencia a lo que se exporta
// por defecto en el fuente powers.ts
// También hemos importanto la interface que se había exportado de forma independiente.
import powers2, { Power } from './data/powers';

const ironman = new Hero('Iron Man', 1, 45);
console.log(ironman);
console.log(powers2);

// Client es el nombre de la clase que quiero importar, pero al haber hecho el alias, ahora no hay problema.
const Client = new C_Client('Pepe', 49);
console.log(Client);

// Usando SuperSport puedo acceder a todo lo que se exporta en Sport.ts
const soccer = new SuperSport.Sport('soccer');
console.log(soccer);

console.log(SuperSport.bestSoccerPlayer);
