(() => {
  console.log('METODOS EN INTERFACES');

  interface Client {
    name: string;
    age?: number;
    address: Address;
    // El método en la interface se define así. En vez de => string como en los types se indica :string
    // Las interfaces no implementan métodos, solo definen la firma.
    // Una clase que extienda de esta interfase TIENE que implementar este método.
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  // Lo ideal es crear una clase en vez de un objeto.
  const client: Client = {
    name: 'José M.',
    age: 44,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Ottawa',
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
})();
