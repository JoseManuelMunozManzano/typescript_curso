"use strict";
(() => {
    console.log('TIPO FUNCION');
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo está salvado';
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('José M.'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=06-tipoFuncion.js.map