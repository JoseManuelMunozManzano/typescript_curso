(() => {
  console.log('OBJETOS BASICOS');

  // Objeto literal JS
  // Como no hemos puesto reglas, TS las pone por nosotros y CREA UN NUEVO TIPO.
  let flash = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo'],
  };

  // Si ahora cambio y pongo una nueva propiedad, como TS creó un nuevo tipo, no permite informar esta propiedad que no existe en el tipo.
  // JS si lo permite.
  flash = {
    name2: 'Otro nombre',
  };

  // Si intento cambiar un valor de una propiedad existente, TS tampoco me deja porque me dice que falta informar las otras 2 propiedades.
  flash = {
    name: 'Clark Kent',
  };

  // Si pongo todas las propiedades, TS me deja hacerlo.
  flash = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Súper fuerza'],
  };

  // Por tanto, el inconveniente que tenemos es que un objeto reciba una nueva propiedad, o un método nuevo.
  // Por ejemplo, esto debería ser permitido, pero NO LO ES, porque en el momento de la definición del objeto no lo puse, pero
  // lo quiero poner ahora.
  // TS no tiene manera de saber que se van a añadir más propiedades o métodos en el futuro.
  flash = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Súper fuerza'],
    getNombre() {
      return this.name;
    },
  };
})();
