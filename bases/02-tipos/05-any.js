"use strict";
// Hay que utilizar any lo menos posible poque es como si le dijéramos a TS que olvide todo sobre tipos y me deje hacer lo que quiera.
// En el archivo tsconfig.json ya viene por defecto la propiedad noImplicitAny a true.
(() => {
    console.log('ANY');
    // Ahora avenger acepta cualquier tipo de dato. Ahora number.
    // any indicado de forma explícita.
    let avenger = 123;
    // any indicado de forma implícita al no inicializar las variables.
    let exists;
    let power;
    // Ahora avenger es un string.
    avenger = 'Dr. Strange';
    // Como es tipo de dato any TS no me ayuda con los métodos.
    // He tenido que recordar que existe y como se escribe charAt
    console.log(avenger.charAt(0));
    // Ahora avenger es un number de nuevo.
    avenger = 150.234353;
    console.log(avenger.toFixed(2));
    console.log(exists); // undefined
    console.log(power); // undefined
    // CASTING
    // Le indicamos a TS que trate una variable como si fuera de un tipo concreto, por ejemplo para tener acceso a la ayuda de TS.
    // NO cambia el tipo, le decimos que lo trate como si fuera de ese tipo.
    // Es una cosa propia de TS, no hay sinónimo en JS.
    avenger = 'Spiderman';
    console.log(avenger.charAt(0));
    // Otra forma de hacer casting es:
    avenger = 23.456;
    console.log(avenger.toFixed(2));
})();
//# sourceMappingURL=05-any.js.map