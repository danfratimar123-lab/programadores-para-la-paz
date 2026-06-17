const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Mejora: Uso de template literals para mayor legibilidad
app.get('/mensaje/:nombre', (req, res) => {
  const { nombre } = req.params; // Buenas prácticas: Destructuración
  res.send(`Hola ${nombre}`);
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
