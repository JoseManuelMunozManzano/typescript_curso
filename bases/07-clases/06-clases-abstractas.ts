(() => {
  console.log('CLASES ABSTRACTAS');

  // Una clase abstracta no es instanciable.
  // Sirven para crear otras clases y asegurarnos de que otras clases implementen lo que estamos esperando.
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  // La clase Xmen tiene como base la clase abstracta Mutante. Usa para ello la palabra clave extends.
  // Se pueden añadir propiedades y métodos personalizados.
  class Xmen extends Mutante {
    salvarMundo() {
      return 'Mundo a salvo!';
    }
  }

  class Villian extends Mutante {
    conquistarMundo() {
      return 'Mundo conquistado';
    }
  }

  // Recordar que se puede usar la clase para indicar el tipo.
  let wolverine: Xmen;
  wolverine = new Xmen('Wolverine', 'Logan');
  console.log(wolverine.salvarMundo());

  const magneto = new Villian('Magneto', 'Magnus');
  console.log(magneto.conquistarMundo());

  // Otro uso de una clase abstracta es especificar que estoy esperando una clase, objeto o argumento que tenga
  // ese tipo o haya sido extendido de ese tipo.
  // Notar que en este ejemplo se usa el tipo de la clase abstracta.
  const printName = (character: Mutante) => {
    console.log(character.realName);
  };

  // Se permite el argumento wolverine o magneto, ya que sus clases extienden de Mutante.
  printName(wolverine);
  printName(magneto);
})();
