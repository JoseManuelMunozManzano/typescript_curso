"use strict";
(() => {
    console.log('PARAMETROS OBLIGATORIOS DE LAS FUNCIONES');
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Startk');
    console.log({ name });
    let noName;
    const name2 = fullName(noName, 'Stark');
})();
//# sourceMappingURL=02-paramObligatorios.js.map