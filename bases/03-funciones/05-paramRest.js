"use strict";
(() => {
    console.log('PARAMETROS RESTS');
    // Solo firstName es obligatorio y todos los demás argumentos son opcionales y se pueden mandar cualquier
    // cantidad de argumentos extra.
    // Para definir una función que permita esto se utilizan los rest arguments (resto de argumentos)
    // Esto lleva usándose mucho tiempo en JS.
    // En TS se el tipo de dato de los rest Args es un array:
    const fullName = (firstName, ...restArgs) => {
        // Devuelve el firstName y la concatenación de todos los nombres mandados usando el join.
        return `${firstName} ${restArgs.join(' ')}`;
    };
    // Solo el primer argumento es obligatorio. Luego se pueden mandar ninguno o todos los demás argumentos
    // que queramos.
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
//# sourceMappingURL=05-paramRest.js.map