(() => {
  console.log('FORMA CORTA DE ASIGNAR PROPIEDADES');

  // En la forma corta, en el constructor se indica el nivel de acceso.
  // Automáticamente se crea la varible y se le asigna el valor que se envíe al crear la instancia.
  // Esta forma corta es la que se usa.
  class Avenger {
    static avgAge: number = 35;

    // La parte de avgAge es un ejemplo de que puede recibirse en el constructor y asignar el valor a la clase.
    // No tiene mucho sentido, solo para ver que es posible.
    // Los parámetros opcionales siempre van al final.
    // Los siguientes parámetros deberán ser opcionales o tener un valor por defecto.
    constructor(private name: string, public team: string, public realName?: string, avgAge: number = 55) {
      Avenger.avgAge = avgAge;
    }
  }

  const antMan: Avenger = new Avenger('Antman', 'Capitán', 'Scott Lang');
  console.log(antMan);

  // Como se ha llamado al constructor antes se ha cambiado el valor de avgAge a 55.
  console.log(Avenger.avgAge);
})();
