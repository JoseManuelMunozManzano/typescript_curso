(() => {
  console.log('NULL Y UNDEFINED');

  // En JS, null y undefined son valores permitidos a un string, un booleano...
  // Pero en las últimas versiones de TS, como estamos trabajando en modo estricto, esto NO es permitido.

  // undefined
  let nada: undefined = undefined;
  console.log(nada);

  // Si el tipo es number, no se puede asignar un undefined a un numérico.
  // JS lo permite, pero TS nos indica el error.
  let nadaNumber: number = undefined;
  console.log(nadaNumber);

  // Igual, TS no permite esto, pero JS lo permite sin problemas.
  let isActive: boolean = undefined;
  console.log(isActive);

  // Si necesitamos que un booleano pueda valer undefined podemos hacer esto:
  // Indicarlo explicitamente, que es la mejor solución.
  let isActive2: boolean | undefined = undefined;

  // O especificar en el fichero tsconfig.json, en la propiedad strictNullChecks, el valor false.
  // Esto último no es recomendable.

  // Lo mismo que hemos hablado para undefined vale para null.
  // PERO null !== undefined

  // A modo de broma, indicar que en TS, con la propiedad strictNullChecks a false, hay 4 valores permitidos:
  // true, false, undefined y null
})();
