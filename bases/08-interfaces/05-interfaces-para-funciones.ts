(() => {
  console.log('INTERFACES PARA LAS FUNCIONES');

  // Se usa para restringir una función, para que luzca de la manera que queremos.
  // No se usa mucho.
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  // Definicimos la función.
  // Por eso esto no se usa mucho, porque lo normal es asignar la función directamente.
  let addNumbersFunction: addTwoNumbers;

  // Asignamos valor a la función.
  // Ahora esta función tiene que tener la firma definida en la interface.
  addNumbersFunction = (a: number, b: number) => {
    return 10;
  };
})();
