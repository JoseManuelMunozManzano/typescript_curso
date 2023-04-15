"use strict";
(() => {
    console.log('PARAMETROS OPCIONALES DE LAS FUNCIONES');
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '-----'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
//# sourceMappingURL=03-paramOpcionales.js.map