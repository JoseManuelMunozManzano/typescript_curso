(() => {
  console.log('INTERFAZ BASICA');

  // Una interface funciona para básicamente lo mismo que un type.
  // La única diferencia es que los tipos no son extendibles, es decir, se crean y así se quedan
  // y las interfaces si lo son.
  // Las interfaces se usan mucho para definir como lucen las peticiones http y los tipos se usan mucho
  // en patrones como Redux.
  // En el código transpilado, una interface simplemente desaparece. Nos ayuda a restringir como están hechos
  // nuestros objetos.

  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo'],
  };

  let superman: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Súper fuerza'],
    getName() {
      return this.name;
    },
  };
})();
