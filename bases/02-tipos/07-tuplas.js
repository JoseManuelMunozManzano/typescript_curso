"use strict";
(() => {
    console.log('TUPLAS');
    // No quiero un array de strings o numbers. (string | number)[]
    // Quiero una tupla en el que el primer dato SIEMPRE es un string y el segundo dato SIEMPRE es un number.
    // Para JS no hay ninguna diferencia, lo va a tratar como un array, pero para TS es una tupla.
    const hero = ['Dr. Strange', 100];
    // Cuál es la ventaja?
    // La posición 0 siempre es un string, así que no me permite asignar un number.
    // Y la posición 1 siempre es un number, así que no me permite asignar un string.
    // JS no se queja
    // hero[0] = 50;
    // hero[1] = 'Iron Man';
    // Así si!
    hero[0] = 'Iron Man';
    hero[1] = 50;
    console.log(hero);
    // Aunque se llama tupla, puede tener más de dos valores.
    const hero2 = ['Spiderman', 120, true];
    console.log(hero2);
})();
//# sourceMappingURL=07-tuplas.js.map