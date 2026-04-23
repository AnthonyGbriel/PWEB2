const express = require('express');
const app = express();

const usuarioRoutes = require('./routes/usuarioRoutes');

// Middleware
app.use(express.json());

// Rotas
app.use('/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
  res.send('API está funcionando!!');
});

module.exports = app;