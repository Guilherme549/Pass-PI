const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

// Rota para buscar todos os usuários
router.get('/', (req, res) => {
    res.json(users);
});

// Rota para adicionar um novo usuário
router.post('/', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1; // Atribui um novo ID
    users.push(newUser);
    res.status(201).send(newUser);
});

// Rota para buscar um usuário específico por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('Usuário não encontrado');
    }
});

// Rota para atualizar um usuário por ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    let user = users.find(u => u.id === parseInt(id));
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        res.send(user);
    } else {
        res.status(404).send('Usuário não encontrado');
    }
});

// Rota para deletar um usuário por ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(u => u.id === parseInt(id));
    if (index > -1) {
        users.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Usuário não encontrado');
    }
});

module.exports = router;
