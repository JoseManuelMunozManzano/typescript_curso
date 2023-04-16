(() => {
  console.log('HERENCIA, SUPER Y EXTENDS');

  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log('Constructor Avenger llamado');
    }

    // protected me permite acceder a este método desde clases hijas.
    // private solo me permite acceder a este método desde esta clase.
    // Como en JS no tenemos niveles de acceso, le da lo mismo que getFullName() sea private, va a funcionar.
    // Pero TS se queja.
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  // Herencia de clases.
  // Xmen tiene a su disposición todo lo que es un Avenger, más lo propio de Xmen.
  //
  // Si el constructor de Xmen no está definido, TS de forma automática hace el super() para llamar a su clase
  // padre (Avenger).
  // Si defino un constructor para Xmen entonces tengo que hacer a mano el paso de parámetros y el super() a
  // la clase Avenger.
  //
  // Indicar que en JS definir un constructor sin indicar los parámetros que necesita Avenger está permitido.
  // El valor será undefined. Si será necesario en JS llamar al padre con super() aunque sea sin argumentos.
  //
  // Llamar a super() lo primero de todo. En TS es obligatorio, pero en JS da igual cuando se llama a super()
  class Xmen extends Avenger {
    // Si indicamos niveles de acceso estamos creando de nuevo las variables name y realName aquí en Xmen.
    // Como NO hace falta crearlas de nuevo, quitando el nivel de acceso son parámetros normales, no variables
    // de instancia.
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log('Constructor Xmen llamado');
    }

    // Llamar a método del padre
    getFullNameDesdeXmen() {
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);
  console.log(wolverine);
  wolverine.getFullNameDesdeXmen();
})();
