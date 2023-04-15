"use strict";
(() => {
    console.log('TIPOS PERSONALIZADOS');
    // Ahora usamos nuestro tipo personalizado.
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        },
    };
})();
