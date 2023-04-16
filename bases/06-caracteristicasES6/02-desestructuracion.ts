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
})();
