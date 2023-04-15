"use strict";
(() => {
    console.log('VOID');
    // Es bueno indicar, si la función no tiene return que se devuelve void.
    // Si ahora se indica return <valor>, TS se va a quejar.
    // Si se indica SOLO return, entonces si es permitido.
    // Ayuda mucho a la documentación y lectura de las funciones.
    function callBatman() { }
    // Vemos que a tiene el tipo de datos void.
    // Indica que no hay nada, vacío.
    // En JS, cuando una función no tiene return, devuelve undefined.
    // TS lo que hace es indicar que no hay valor de retorno y a ese tipo de datos lo llama void.
    const a = callBatman();
    console.log(a); // undefined
    // Para poner tipo de dato devuelto en función de flecha.
    // NOTA: Se ha puesto return para indicar que es permitido, pero NO haría falta.
    // return undefined también funciona.
    const callSuperman = () => {
        return;
    };
    // NOTAS: null <> void
    //        null <> undefined
})();
