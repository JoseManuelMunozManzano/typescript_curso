"use strict";
(() => {
    console.log('OBJETOS BASICOS');
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name2: 'Otro nombre',
    };
    flash = {
        name: 'Clark Kent',
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
        getNombre() {
            return this.name;
        },
    };
})();
//# sourceMappingURL=01-objetosBasicos.js.map