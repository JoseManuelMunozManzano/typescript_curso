(() => {
  console.log('LET');

  // En TS var no existe. Permite su uso, pero no lo valida.
  // Se usa let y const.

  // Las constantes se usan mucho y es importante saber que no se puede cambiar la asignación, pero si los valores
  const heroe = {
    a: 1,
    b: 2,
  };

  // Esto no es posible
  //heroe = { x: 5 };

  // Pero esto si y es muy típico.
  heroe.b = 100;

  // Se usan mucho también para asignar funciones. Es la manera recomendada.
  const getName = () => {};

  // Y ahora no se puede cambiar la función.
  // Se queja TS y sobretodo, da error en JS ("target": "es2016" en tsconfig.json).
  // getName = () => {};

  // Sin embargo, creando funciones de la manera tradicional si se puede cambiar la función.
  function getTeam() {
    console.log('My Team');
  }

  // Esto se puede, y por eso se recomienda el uso de las funciones flecha
  // TS se queja, pero JS lo acepta sin problemas.
  getTeam = () => {
    console.log('My new Team');
  };

  getTeam();
})();
