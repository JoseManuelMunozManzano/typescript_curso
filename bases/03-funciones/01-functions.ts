(() => {
  console.log('FUNCIONES BASICAS');

  const hero: string = 'Flash';

  // Se indica el tipo de dato de retorno. Es bueno indicarlo por si se nos pasara devolver ese tipo y también
  // para el caso en que alguien quiera usar estas funciones, que sepa lo que devuelve.
  // En este caso devuelve un string.
  function returnName(): string {
    return hero;
  }

  // Usando funciones flecha.
  // Notar que TS indica que lo que se devuelve es una función que devuelve un string: () => string
  // Pero lo mejor es que lo indiquemos.
  const activateBatisignal = (): string => {
    return 'Batiseñal activada!';
  };

  console.log(typeof activateBatisignal);

  const heroName = returnName();
})();
