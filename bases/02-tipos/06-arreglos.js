"use strict";
(() => {
    console.log('ARREGLOS');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbers2 = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    numbers2.push(11);
    console.log(numbers2);
    const numbers3 = [1, 2, 3, 4, 5, '6', 7];
    numbers3.push(true);
    console.log(numbers3);
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach((v) => console.log(v.toUpperCase()));
})();
//# sourceMappingURL=06-arreglos.js.map