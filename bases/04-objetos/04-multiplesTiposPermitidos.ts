(() => {
  console.log('MULTIPLES TIPOS PERMITIDOS');

  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  // La unión de tipos, con pipes (|), indica que una variable permite varios tipos.
  let myCustomVariable: string | number | Hero = 'José M.';
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Bruce',
    age: 43,
    powers: [1],
  };
  // El tipo de dato es object. Recordar que en JS no existe el tipo Hero.
  console.log(typeof myCustomVariable);
})();
