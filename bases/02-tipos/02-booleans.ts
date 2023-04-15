(() => {
  console.log('BOOLEANOS');

  // Los valores posibles son true y false.
  // Con TS, las posibilidades undefined y null sencillamente no son posibles.

  // Si se declara la variable pero no se inicializa y luego se usa, TS lo indica con un error.
  let isSuperman: boolean = true;
  console.log({ isSuperman });

  let isBatman: boolean = false;
  console.log({ isBatman });
})();
