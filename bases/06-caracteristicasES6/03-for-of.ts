(() => {
  console.log('FOR OF');

  // Para trabajar con arreglos que tengan un longitud definida.
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: 'Iron Man',
    weapon: 'Armor suit',
  };

  const captainAmerica: Avenger = {
    name: 'Capitán América',
    weapon: 'Shield',
  };

  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir',
  };

  // Aunque no se haya indicado el tipo Avenger[], TS ya lo infiere porque los elementos del array son todos
  // del tipo Avenger.
  // Lo ideal es siempre indicarlo.
  const avengers: Avenger[] = [ironman, thor, captainAmerica];

  // Uso de for of
  // En cada iteración va extrayendo los valores de avengers.
  for (const avenger of avengers) {
    // TS me ofrece la ayuda de propiedades disponibles
    console.log(avenger.name, avenger.weapon);
  }
})();
