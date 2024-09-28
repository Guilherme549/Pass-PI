const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

const port = 3000;

app.use(express.json()); // Habilita o parsing de JSON

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
