"use strict";
(() => {
    var _a;
    console.log('COMO CREAR OBJETOS CON TIPOS ESPECIFICOS');
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'Clark Kent',
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        },
    };
    console.log(flash);
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
    };
})();
//# sourceMappingURL=02-objetosTiposEspecificos.js.map