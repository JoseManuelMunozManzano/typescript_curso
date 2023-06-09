(() => {
  console.log('STRINGS');

  // Hay 3 formas de definir strings
  // comilla simple, comilla doble y backtics
  const batman: string = 'Batman';
  const linternaVerde: string = "Linterna 'Verde'";
  const volcanoNegro: string = `Héroe: Volcán Negro`;

  const abc = 123;

  // concatenaciones, permite mezclar tipos de datos porque se llama al toString() interno.
  console.log(`I'm ${batman}, ${abc}`);

  console.log(batman.toLocaleUpperCase());

  // Como siempre cuidado, porque no siempre TS es capaz de evitar errores.
  // Nuestro string 'Batman' tiene 6 caracteres, así que batman[10] es undefined.

  //console.log(batman[10].toUpperCase());

  // Indicando batman?[10] se realiza un null check.
  // Si la posición 11 tiene algo hace el uppercase, si es undefined escribe 'No está presente'
  // porque undefined es false.
  console.log(batman[10]?.toUpperCase() || 'No está presente');
})();
