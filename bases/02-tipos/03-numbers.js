"use strict";
(() => {
    console.log('NUMBERS');
    let avengers; // tipo any solo declarado
    console.log(avengers); // undefined
    const villians = 20;
    // TS nos indica el error de posible undefined.
    // Este error sería difícil de encontrar porque en JS no salta ningún error (undefined > 20 en JS).
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    // Cuidado con pensar que TS nos da siempre los errores.
    avengers = Number('55A'); // Devuelve NaN
    console.log({ avengers }); // Pero NaN es considerado un número y esto funciona!!
})();
//# sourceMappingURL=03-numbers.js.map