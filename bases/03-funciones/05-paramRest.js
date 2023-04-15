"use strict";
(() => {
    console.log('PARAMETROS RESTS');
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
//# sourceMappingURL=05-paramRest.js.map