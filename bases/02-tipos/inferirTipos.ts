// Función anónima autoinvocada para ejecutar el código.
// Técnica para que mis archivos no choquen entre si, es decir, poder crear varios archivos en el mismo proyecto
// y que no caigan dentro del scope global.
//
// Es así:
//
// (() => {
//    .... código ...
// }) ()
//

(() => {
  console.log('INFERIR TIPOS Y MODO ESTRICTO');

  // tipo de dato es 10 porque es una constante y no se puede cambiar a otro valor.
  const a = 10;
  // tipo de dato es number porque es variable y se puede cambiar a otro número.
  let b = 10;

  // Lo mejor es que TypeScript no infiera el tipo de dato, indicárselo nosotros.
  // Ahora la constante a1 y la variable b1 es un tipo de dato number.
  const a1: number = 10;
  let b1: number = 10;

  // Tipo de dato any, puede ser cualquier cosa. Perdemos control porque b puede ser cualquier cosa.
  let b2;

  b2 = 3.1416;
  b2 = {};
  b2 = [];
  b2 = true;

  // Como el parámetro msg tiene tipo de dato any, da error.
  // Esto es porque en tsconfig.json la propiedad "noImplicitAny" tiene por defecto el valor a true.
  // Se podría poner a false, pero no es recomendable.
  //
  //function sayHello(msg) {
  //
  // Es muy buena práctica indicar el tipo de dato para que sepamos que reciben las funciones y que van a retornar.
  // Además, indicando el tipo de dato tenemos la ayuda de TS para ver que métodos/propiedades puedo utilizar.
  function sayHello(msg: string) {
    console.log(msg + ' ' + 'José');
  }
})();
