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
// Indicar que SI genera el fichero index.js, que podríamos ejecutar con el mandato:
// node index.js
//
// Por tanto, hay que instalar:
// npm i --save-dev @types/node
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.json({
    ok: true,
    msg: 'Todo salio bien',
  });
});
app.listen(port, function () {
  console.log('Example app listening on port '.concat(port));
});
