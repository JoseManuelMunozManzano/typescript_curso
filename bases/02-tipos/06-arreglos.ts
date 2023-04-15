(() => {
  console.log('ARREGLOS');

  // Cuando TS indica number[] puede ser un arreglo o una tupla.
  // Arreglo de números. Esto es lo normal, que un arreglo sea de un tipo específico.
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Arreglo de números o cadenas
  const numbers2: (number | string)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];

  // No me deja. Solo puedo insertar strings o numbers.
  //numbers2.push(true);
  numbers2.push(11);
  console.log(numbers2);

  // Para que me dejara añadir a un arreglo tanto números como strings como booleanos haría
  const numbers3: (number | string | boolean)[] = [1, 2, 3, 4, 5, '6', 7];
  numbers3.push(true);
  console.log(numbers3);

  // Uso de forEach
  const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
  villians.forEach((v) => console.log(v.toUpperCase()));
})();
