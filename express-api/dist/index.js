"use strict";
// Se va a explicar como podemos usar librerías que no fueron escritas en TS y no tenemos soporte del mismo.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Usamos TS
// https://expressjs.com/
// Para instalar:
// npm i express
// Express por defecto no tiene soporte de TS.
//
// Ejecutar con el mandato:
// npm start
// Vemos que falla al ejecutar el mandato tsc e indica que instalemos el fichero de definición de TS.
// Los archivos de definición son archivos del tipo Archivo.d.ts que indican a TS, mediante interfaces y tipos,
// que es posible usar en una librería que no tiene soporte TS.
//
// Indicar que SI genera el fichero index.js, pero vamos a realizar una configuración para que genere el fichero .js
// en la carpeta dist.
// Para ello queremos que nos cree el fichero tsconfig.json. Ejecutar:
// npx tsc --init
// Y se indica la propiedad "outDir": "./dist"
//
// Ejecutar con el mandato:
// npm run build
//
// Por tanto, hay que instalar (AHORA SI!!):
// npm i --save-dev @types/express
// Y mágicamente se resuelven todos los errores y tengo la ayuda de TS.
// Sustituimos el require por import
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.status(201).json({
        ok: true,
        msg: 'Nuevo id: 123123',
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
