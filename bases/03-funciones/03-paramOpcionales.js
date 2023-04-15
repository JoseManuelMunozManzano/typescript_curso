"use strict";
(() => {
    console.log('PARAMETROS OPCIONALES DE LAS FUNCIONES');
    // Para indicar a TS que un parámetro es opcional, se usa ?
    // En JS no hay manera de indicar que un parámetro es obligatorio u opcional. Todos son opcionales.
    const fullName = (firstName, lastName) => {
        // Indicando que si no tenemos lastName escriba -----
        return `${firstName} ${lastName || '-----'}`;
    };
    // Ahora, al definir lasttName como opcional, puedo mandar solo un string.
    const name = fullName('Tony');
    console.log({ name });
})();
//# sourceMappingURL=03-paramOpcionales.js.map