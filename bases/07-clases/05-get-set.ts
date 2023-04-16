(() => {
  console.log('GET Y SET');

  // Vistas desde fuera un getter y un setter parecen propiedades corrientes, pero internamente
  // es como un método.
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log('Constructor Avenger llamado');
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log('Constructor Xmen llamado');
    }

    // Los getter tienen que devolver un valor.
    // La ventaja de un getter es que se puede aplicar más lógica de programación antes de devolver el valor de
    // una propiedad.
    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    // Un setter recibe UNO Y SOLO UN argumento con un valor y lo asigna a una propiedad.
    // Como se ve, puede tener el mismo nombre que el get, porque la firma es distinta.
    // La ventaja de un setter es que se puede aplicar más lógica de programación antes de asignar el valor a la
    // propiedad. Eso si, la respuesta debe ser síncrona.
    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error('El nombre debe ser mayor de 3 letras');
      }

      this.name = name;
    }

    getFullNameDesdeXmen() {
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);
  // Ahora TS al ofrecerme el autocompletado de propiedades/métodos, parece qeu fullName sea una propiedad.
  // Pero no lo es, es un getter. No hace falta ejecutarlo como fullName(), solo indicar el nombre.
  console.log(wolverine.fullName);

  // Usando un setter y luego el getter
  wolverine.fullName = 'José M.';
  console.log(wolverine.fullName);
})();
