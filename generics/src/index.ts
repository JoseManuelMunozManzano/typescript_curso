import { genericFunction, printObject } from './generics/generics';

console.log('-----INTRODUCCION A LOS GENERICOS-----');
// Una función genérica es una función que puede recibir cualquier tipo de argumento.
printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
printObject('Hola Mundo');

console.log(genericFunction(3.141618).toFixed(2));
// Errores. Si TS me diera acceso a la ayuda del tipado sabría que no puedo usar toFixed, pero como el parámetro
// que espera la función es de tipo any no lo tengo
//
//console.log(genericFunction('Hola Mundo').toFixed(2));
//console.log(genericFunction(new Date()).toFixed(2));

// Para resolver esto tenemos los genéricos donde indicamos a TS que se va a recibir cualquier tipo de objeto
// y la salida la puedo definir en función del tipo que recibo a la entrada.
// También tendré toda la ayuda de TS.
