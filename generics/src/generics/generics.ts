// Función genérica porque recibe cualquier dato.
// PROBLEMA: tipo any, con lo que TS no va a poder ayudarme con el tipado.
export const printObject = (argument: any) => {
  console.log(argument);
};

// Función tradicional
export function genericFunction(argument: any) {
  return argument;
}
