"use strict";
(() => {
    console.log('PARAMETROS POR DEFECTO');
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || '-----'}`.toUpperCase();
        return `${firstName} ${lastName || '-----'}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
    const name2 = fullName('Tony', 'Manero', true);
    console.log({ name2 });
})();
//# sourceMappingURL=04-paramDefecto.js.map