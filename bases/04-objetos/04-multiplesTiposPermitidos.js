"use strict";
(() => {
    console.log('MULTIPLES TIPOS PERMITIDOS');
    // La unión de tipos, con pipes (|), indica que una variable permite varios tipos.
    let myCustomVariable = 'José M.';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1],
    };
    // El tipo de dato es object. Recordar que en JS no existe el tipo Hero.
    console.log(typeof myCustomVariable);
})();
//# sourceMappingURL=04-multiplesTiposPermitidos.js.map