require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const User = require('./models/User');

const app = express();
app.use(express.json());

sequelize.sync().then(() => {
    console.log('Database conectado');
}).catch(err => {
    console.error('Erro na conexão:', err);
});

app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
