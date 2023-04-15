"use strict";
(() => {
    console.log('FUNCIONES BASICAS');
    const hero = 'Flash';
    // Se indica el tipo de dato de retorno. Es bueno indicarlo por si se nos pasara devolver ese tipo y también
    // para el caso en que alguien quiera usar estas funciones, que sepa lo que devuelve.
    // En este caso devuelve un string.
    function returnName() {
        return hero;
    }
    // Usando funciones flecha.
    // Notar que TS indica que lo que se devuelve es una función que devuelve un string: () => string
    // Pero lo mejor es que lo indiquemos.
    const activateBatisignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
