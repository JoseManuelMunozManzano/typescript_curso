"use strict";
(() => {
    console.log('NEVER');
    // Tipo de dato propio de TS. No existe en JS.
    // El tipo de dato never no es undefined ni void. Es never.
    // Una función que regresa never no puede tener un punto alcanzable.
    // Esto significa que es una función que va a terminar con un error.
    const error = (message) => {
        throw new Error(message);
    };
    // Cuando llamamos a error, como la función devuelve never, sabemos que no va a seguir ejecutándose el código. El programa va a reventar.
    error('Auxilio!!');
    // Esto ya no se ejecuta.
    console.log('No me voy a ejecutar');
    // Otro ejemplo que retorna never o un número.
    // Si es false retorna never pero si es true devuelve un number.
    const posibleError = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
})();
