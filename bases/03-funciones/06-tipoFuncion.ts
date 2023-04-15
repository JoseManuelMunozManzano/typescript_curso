(() => {
  console.log('TIPO FUNCION');

  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => 'El mundo está salvado';

  // Para permitir cualquier cosa. No hay tipo (es tipo any)
  //let myFunction;

  // Para permitir todos los tipos función, usar tipo Function.
  let myFunction: Function;

  // Si queremos que el tipo función reciba dos numbers y regrese un número.
  // let myFunction: (x: number, y: number) => number;

  // Si queremos que el tipo función reciba un string y regrese un string.
  // let myFunction: (x: string) => string;

  //Si queremos que el tipo función no reciba ningún argumento y regrese un string.
  // let myFunction: () => string;

  // No permitido
  //* myFunction = 10;
  //* console.log(myFunction);

  // NOTA: En JS todos los objetos pasan por referencia.
  // TS logra inferir los tipos después de una asignación.
  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  myFunction = greet;
  console.log(myFunction('José M.'));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
