(() => {
  console.log('INTERFACES EN CLASES');

  // Es mejor usar interfaces cuando creemos o sabemos que van a aumentar con el tiempo las propiedades o métodos.
  // Es mejor usar tipos cuando estamos seguros de que dicho tipo no va a aumentar el número de
  // propiedades o metodos, como en el patrón Redux para las acciones, que sabemos que no van a variar.
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  // extends sirve para extender otra clase y Xmen es una interface.
  // Se usa la palabra clave implements para forzar a que la clase implemente lo que indica la interface.
  // Si la clase debe implementar más de una interface, estas se separan por comas.
  class Mutant implements Xmen, Human {
    constructor(public age: number, public name: string, public realName: string) {}

    mutantPower(id: number): string {
      return this.name + ' ' + this.realName;
    }
  }
})();
