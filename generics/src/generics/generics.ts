// Función genérica porque recibe cualquier dato.
// PROBLEMA: tipo any, con lo que TS no va a poder ayudarme con el tipado.
export const printObject = (argument: any) => {
  console.log(argument);
};

// Función tradicional.
// Haciéndola genérica con <T>
// Estamos indicando que vamos a recibir un tipo de dato cuando se llame a genericFunction,
// que será el mismo tipo de dato del argumento y por defecto la salida también será del mismo tipo (aunque puede
// devolver otra cosa si se indica)
export function genericFunction<T>(argument: T): T {
  return argument;
}

// Función flecha.
// Haciéndola genérica.
// Como se ha indicado antes, si no se indica la salida por defecto es de tipo T.
export const genericFunctionArrow = <T>(argument: T) => argument;
