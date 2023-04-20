// Decoradores de clases

// Creación de un decorador
// Con los decoradores se suele usar la forma tradicional function para que quede claro que es un decorador.
function printToConsole(constructor: Function) {
  console.log(constructor);
}

// Factory Decorator
// Sirven para mostrar información de manera condicional, para recibir argumentos que son enviados al decorador
// en el momento de ejecutar estas clases.
// Los factory decorator pueden ser una función de flecha, pero lo normal es que se creen como funciones
// tradicionales, con function
//
// Un factory constructor siempre debe retornar una función.
// Entonces el decorator, como siempre, es una función, que para un factory decorator devuelve otra función
// que es la que será ejecutada cuando la clase sea transpilada.
//
// NOTA: Es obligatorio indicar que se retorna una función (:Function)
const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

// Uso de un decorador con @
// Los decoradores son una característica experimental sujeta a cambios en el futuro.
// Por defecto están inhabilitados en ts. Para habilitarlos hay que ir al fichero tsconfig.json y poner
// la propiedad 'experimentalDecorators' a true.
// Luego bajar la aplicación y volver a subirla con npm start.
//
// Notar que este código se va a ejecutar sin tener que crear ninguna instancia.
@printToConsole
export class Pokemon {
  public pubicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}
}

@printToConsoleConditional(true)
export class Pokemon_2 {
  public pubicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}
}
