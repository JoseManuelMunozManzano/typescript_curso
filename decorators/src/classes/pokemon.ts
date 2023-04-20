import { bloquearPrototipo } from './bloquea';

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

//@printToConsole
export class Pokemon {
  public pubicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}
}

// Se pueden anidar decoradores sin problema. Se ejecutan de arriba a abajo

@bloquearPrototipo
//@printToConsoleConditional(true)
export class Pokemon_2 {
  public pubicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}
}

// Decoradores de métodos
// Se supone que este decorador puede usarse en muchos métodos. Si no es así, otra opción sería usar este código
// directamente en el método, sin crear este decorador.
// Además indicar que este es un factory decorator.
//
// propertyKey, aunque puede llamarse de cualquier otro nombre, apunta a lo que está decorando (nombre del método).
// descriptor permite poner el decorador de solo lectura o escritura.
// target es la clase, por si queremos cambiar algo a nivel de clase.
function checkValidPokemonId() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log({ target, propertyKey, descriptor });
    // Ejemplo de uso de descriptor en el que se cambia lo que devuelve la función decorada por esta,

    // por lo que se escribirá en consola Hola mundo.
    // descriptor.value = () => console.log('Hola mundo');

    // El id no puede ser menor a 1 o mayor a 800 porque no hay más de 800 pokemons.
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('El id del pokemon debe de estar entre 1 y 800');
      } else {
        // Para ejecutar el código que se estaba esperando, necesito el truco de declararlo fuera antes
        // porque aquí dentro no puedo indicar descriptor.value, porque la estoy cambiando.
        return originalMethod(id);
      }
    };
  };
}

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon_3 {
  public pubicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado en DB ${id}`);
  }
}
