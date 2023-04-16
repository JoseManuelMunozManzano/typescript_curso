(() => {
  console.log('ESTRUCTURAS COMPLEJAS');

  // Si el objeto tiene un par de propiedades, declarar una interface es fácil.
  // Pero ¿qué pasa si nuestro objeto empieza a ser muy compliado, con objetos dentro de objetos?
  // Cuando la interface tiene un nivel ya no es recomendado seguir anidando el tipado porque es
  // muy difícil de leer y de mantener.
  //
  // La interface principal va arriba.
  interface Client {
    // nivel 0
    name: string;
    age?: number;
    // address: {
    //   // nivel 1
    //   id: number;
    //   zip: string;
    //   city: string;
    // };
    address: Address;
  }

  // Lo que se recomienda es tener otra interface Address.
  // Estas interfaces secundarias con la que se forman la principal van abajo.
  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  // Recordar que aunque haya mucho código de interface no se transpila a JS!

  const client: Client = {
    name: 'José M.',
    age: 44,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Ottawa',
    },
  };

  const client2: Client = {
    name: 'Adri',
    age: 40,
    address: {
      id: 12,
      city: 'Toronto',
      zip: 'K2S U23',
    },
  };
})();
