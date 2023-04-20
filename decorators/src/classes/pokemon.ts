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
  public publicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}
}

// Se pueden anidar decoradores sin problema. Se ejecutan de arriba a abajo

@bloquearPrototipo
//@printToConsoleConditional(true)
export class Pokemon_2 {
  public publicApi: string = 'https://pokeapi.co';

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
//@printToConsoleConditional(true)
export class Pokemon_3 {
  public publicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado en DB ${id}`);
  }
}

// Decoradores de propiedades
// Vamos a crear un decorador que haga que nuestra publicApi sea de solo lectura, porque JS permite
// aunque sea private (solo es private a nivel TS) cambiar por fuera la API. TS se queja, pero JS lo permite.
//
// Mientras que en un decorador de método puedo recibir 3 parámetros (target, propertyKey y descriptor),
// en un decorador de propiedad solo puede recibir dos parámetros, target y propertyKey. El descriptor solo
// aplica a decorar un método.
//
// Pero si podemos crear un PropertyDescriptor, indicando los getter y los setter
function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    // console.log({ target, propertyKey });
    const descriptor: PropertyDescriptor = {
      get() {
        // Con this, en una función clásica, se obtiene acceso al decorador. Es por eso que suelen usarse estas
        // funciones en vez de las de flecha, donde this apunta afuera.
        //
        // Para que este console.log se ejecute, en la consola de Chrome, desplegar Pokemon_4 y pulsar en
        // los 3 puntos de publicApi. Es entonces cuando se ejecuta este get.
        console.log(this, 'getter');
        return 'José M.';
      },

      // En modo lectura no debemos permitir que se ejecute el setter, cuya función es establecer el valor de
      // la propiedad.
      set(this, val) {
        // console.log(this, val);

        // this es este decorador, propertyKey en el ejemplo sería publicApi, es decir, la propiedad a la que
        // pongo el decorador e indicamos entre llaves un PropertyDescriptor.
        // En este ejemplo, solo la primera vez que accedemos al setter se establece su valor y luego
        // indicamos que ya no es escribible (no se podrá actualizar el valor)
        // Con enumerable a false no se puede ver.
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

export class Pokemon_4 {
  @readonly(true)
  public publicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}
}
