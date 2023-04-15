"use strict";
(() => {
    console.log('NEVER');
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio!!');
    console.log('No me voy a ejecutar');
    const posibleError = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
})();
//# sourceMappingURL=10-never.js.map