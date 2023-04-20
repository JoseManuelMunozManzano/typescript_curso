// Se va a explicar como podemos usar librerías que no fueron escritas en TS y no tenemos soporte del mismo.

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
// npm start
//
// Para ejecutar JS directamente:
// node dist/index.js
//
// Por tanto, hay que instalar:
// npm i --save-dev @types/node
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.json({
    ok: true,
    msg: 'Todo salio bien',
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
