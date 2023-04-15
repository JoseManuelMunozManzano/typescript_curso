"use strict";
(() => {
    console.log('PARAMETROS OBLIGATORIOS DE LAS FUNCIONES');
    // Indicamos que firstName y lastName son de tipo string porque si no TS nos indica que son de tipo any,
    const fullName = (firstName, lastName) => {
        // Si estuviéramos trabajando en JS habría que hacer validaciones de los parámetros. Ver si vienen o no.
        // CON TS NOS TIENEN QUE MANDAR LOS 2 STRINGS.
        // De todas formas esto serviría porque TS no es a prueba de errores y siempre podemos mandar un firstName a undefined.
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return `${firstName} ${lastName}`;
    };
    // Tal y como se ha definido la función, los parámetros son obligatorios. Si no mandamos 2 argumentos string, TS nos va a dar un error.
    //const nameError = fullName('Tony');
    const name = fullName('Tony', 'Startk');
    console.log({ name });
    // Ejemplo de firstName a undefined.
    // TS me deja hacerlo.
    // Esta es otra razón de por qué no es bueno usar any.
    let noName;
    const name2 = fullName(noName, 'Stark');
})();
