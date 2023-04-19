// Decoradores de clases

// Creación de un decorador
// Con los decoradores se suele usar la forma tradicional function para que quede claro que es un decorador.
function printToConsole(constructor: Function) {
  console.log(constructor);
}

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
