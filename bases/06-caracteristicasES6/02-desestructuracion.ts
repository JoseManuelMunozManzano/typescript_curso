(() => {
  console.log('DESESTRUCTURACION DE OBJETOS');

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.124,
  };

  // TS soporta la desestructuración sin problemas.
  // Se toman las propiedades que nos interesan del objeto, sin importar el orden.
  const { poder, vision } = avengers;
  // TS nos da la ayuda de tipos sin problema.
  console.log(poder.toFixed(2), vision.toLocaleUpperCase());

  // Gracias a que nos hemos creado el type ahora usar una función es más fácil.
  // Podemos desestructurar los mismos parámetros y también tenemos el operador rest disponible.
  const printAvenger = ({ ironman, ...resto }: Avengers): void => {
    console.log(ironman, resto);
  };

  printAvenger(avengers);

  console.log('DESESTRUCTURACION DE ARREGLOS');

  // Es una tupla
  // Si como tipo indicáramos any[] entonces en la desestructuración, para TS, todo sería de tipo any.
  const avengersArr: [string, string, string, boolean, number] = ['Cap. América', 'Ironman', 'Hulk', true, 150.24];

  // Sintaxis fea
  const ironmanFeo = avengersArr[1];
  console.log({ ironmanFeo });

  // Desestructuración
  // Se indican comas hasta llegar al valor que quiero obtener.
  // Es importante haber indicado los tipos porque TS sabe perfectamente que fuerza es un number y hulk un string.
  const [, ironman, hulk, , fuerza] = avengersArr;
  console.log({ ironman, hulk });
})();
