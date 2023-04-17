import { genericFunction, genericFunctionArrow, printObject } from '../generics/generics';
// No hace falta indicar index.ts porque se sobreentiende.
import { Hero, Villain } from '../interfaces';

console.log('-----INTRODUCCION A LOS GENERICOS-----');
// Una función genérica es una función que puede recibir cualquier tipo de argumento.
printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
printObject('Hola Mundo');

console.log('-----FUNCIONES GENERICAS-----');

const name = 'José M.';
// Tenemos acceso a la ayuda de TS al usar los genéricos, por lo que es más difícil cometer errores.
console.log(genericFunction(3.141618).toFixed(2));
console.log(genericFunction(name).toUpperCase());
console.log(genericFunction(new Date()).getDate());

console.log(genericFunctionArrow(3.141618).toFixed(2));

console.log('-----EJEMPLO DE FUNCION GENERICA EN ACCION-----');
// Qué pasa si queremos restricciones? Que una función sólo pueda trabajar con números o el valor de retorno
// sea un número.

// Esta constante puede cumplir cualquiera de las dos interfaces definidas: Hero o Villain
const deadpool = {
  name: 'Deadpook',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130,
};

// Para definir que lo que enviamos tiene que ser algo de tipo Hero.
// TS solo me deja coger atributos definidos en la interface Hero, es decir, no aparece dangerLevel.
console.log(genericFunctionArrow<Hero>(deadpool).realName);

// Igual para tipo Villain, TS no me deja coger el atributo realName.
// Pero IMPORTANTE: si al haber definido la constante deadpool no hubiéramos puesto la propiedad dangerLevel,
// no me dejaría pasar como argumento deadpool. Me diría que falta esa property.
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);

console.log('-----AGRUPAR EXPORTACIONES-----');
// Ver interfaces/index.ts
