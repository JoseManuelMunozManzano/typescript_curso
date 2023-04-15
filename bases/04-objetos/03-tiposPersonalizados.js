"use strict";
(() => {
    console.log('TIPOS PERSONALIZADOS');
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
//# sourceMappingURL=03-tiposPersonalizados.js.map