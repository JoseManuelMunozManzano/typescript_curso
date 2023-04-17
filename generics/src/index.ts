import { genericFunction, genericFunctionArrow, printObject } from './generics/generics';

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
