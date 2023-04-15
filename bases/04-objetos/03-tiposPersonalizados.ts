(() => {
  console.log('TIPOS PERSONALIZADOS');

  // En TS existe una palabra reservada llamada type, que se usa para definir un tipo personalizado.
  // Indica reglas o constraints al objeto o variables que estemos definiendo.
  // Al final acaba funcionando como si fuera un tipo de los normales, como string, number...
  // No existe contraparte en JS y por tanto esta definición de tipo no se transpila.
  //
  // Si el día de mañana el tipo de powers cambia a arreglo de numbers, solo lo tengo que cambiar aquí, y TS
  // me va a avisar de todos los sitios donde tengo mal powers (como arreglo de strings en vez de arreglo de numbers)
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  // Ahora usamos nuestro tipo personalizado.
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
