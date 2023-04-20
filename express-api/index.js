// Se va a explicar como podemos usar librerías que no fueron escritas en TS y no tenemos soporte del mismo.

// Primero vamos a ver como haríamos un Rest API con Express en JS y luego lo pasaremos a TS

// https://expressjs.com/
// Para instalar:
// npm i express
// Express por defecto no tiene soporte de TS.
//
// Ejecutar con el mandato:
// npm start
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
