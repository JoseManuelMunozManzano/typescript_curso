(() => {
  console.log('METODO PUBLICOS Y PRIVADOS');

  class Avenger {
    static avgAge: number = 35;

    // Método estático
    // El this hace referencia a la clase, no a una instancia, es decir, no es la variable private name.
    // this.name me devuelve el nombre de la clase.
    static getAvgAge() {
      return this.name;
    }

    constructor(private name: string, public team: string, public realName?: string) {}

    // Si no se indica nada el método es public, pero es mejor indicarlo.
    // Si el método es private solo se puede acceder a este método de forma interna.
    // Pero esto solo a nivel de TS.
    // JS lo permite porque no hay manera FACIL de hacer private un método en ES6.
    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antMan: Avenger = new Avenger('Antman', 'Capitán', 'Scott Lang');
  console.log(antMan);

  console.log(antMan.bio());
  console.log(Avenger.getAvgAge());
})();
