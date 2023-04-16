(() => {
  console.log('CLASE BASICA EN TS');

  class Avenger {
    // Propiedades
    // En TS se especifican niveles de acceso. Si no se indica se infiere que es public.
    // También se pueden indicar valores por defecto y si son o no opcionales.
    // De esta declaración de propiedades no se transpila nada a JS.
    private name: string;
    public team: string;
    public realName?: string;
    static avgAge: number = 35;

    // constructor para enviar datos a la clase
    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antMan: Avenger = new Avenger('Antman', 'Capitán');
  // Con TS puedo acceder a la ayuda para conocer las propiedades PUBLICAS de la clase Avenger.
  console.log(antMan);

  // Para tener acceso a propiedades static tengo que usar la clase, no una instancia.
  console.log(Avenger.avgAge);
})();
