(() => {
  console.log('CLASES EN ES6');

  // Este fichero que habla de clases la vamos a hacer en JS.
  // Ahora con ES6 ya tenemos en JS todo el concepto de clases pero no les ha quedado muy bonito.
  // En TS veremos las clases en la carpeta 07-clases

  // La forma de definir propiedades en JS es un poco ambigua. No puedo saber los tipos
  class Avenger {
    // No es obligatorio indicar esto. Ambiguo
    //name;
    //power;

    // Como puede que no me manden argumentos, pongo los parámetros con valores por defecto.
    // Además, más o menos la persona que llame a mi clase puede saber qué tipos de datos espero.
    constructor(name = 'No name', power = 0) {
      this.name = name;
      // PROBLEMA DE JS: En vez de indicar aquí power, por error podríamos indicar power2 y NO HAY ERROR
      this.power2 = power;

      // PROBLEMA DE JS: Las propiedades pueden aparecer de la nada.
      this.nuevaPropiedad = true;
    }
  }

  // ES6 permite herencia
  class FlyingAvenger extends Avenger {
    flying;

    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  // Como no es obligatorio pasar argumentos en JS, esto es correcto, pero no deseable.
  const hulk = new Avenger();
  console.log(hulk);

  const captainAmerica = new Avenger('Capitán América', 4000);
  console.log(captainAmerica);

  const falcon = new FlyingAvenger('Falcon', 500);
  console.log(falcon);
})();
