(() => {
  console.log('CONSTRUCTORES PRIVADOS');

  // Un constructor privado se usa para controlar la manera en la que mis instancias son creadas.
  // El uso más común es crear singletons, que es una sola instancia compartida/usada en toda la aplicación.
  //
  // Indicar que se usa cada vez menos.
  class Apocalipsis {
    // Creamos una instancia estática del mismo tipo de la clase.
    static instance: Apocalipsis;

    // Solo puedo llamar a este constructor dentro de esta misma clase.
    private constructor(public name: string) {}

    // Método que sirve para crear UNA instancia de tipo Apocalipsis.
    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el único');
      }

      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  // Si fuera un constructor público se podrían crear varias instancias distintas de esta forma:
  // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único');
  // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único');
  // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único');

  // Pero siendo el constructor privado, para crear una instancia (será un singleton) llamamos al método estático
  // de la clase.
  const apocalipsis1 = Apocalipsis.callApocalipsis();

  // Subsiguientes llamadas a Apocalipsis.callApocalipsis() nos devolverá la MISMA instancia.
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  // Aunque solo cambio name a apocalipsis1, realmente lo cambio a apocalipsis2 y apocalipsis3, porque todas
  // son la misma instancia en memoria.
  apocalipsis1.changeName('Xavier');

  console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
