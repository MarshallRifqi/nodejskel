// index.js

const express = require('express');
const path = require('path');
const { getUsers } = require('./app/userController');

const app = express();
const port = 5500;

// Set view engine and static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to get data asynchronously
app.get('/getData', async (req, res) => {
    try {
        const users = await getUsers();
        // Mengirimkan data pengguna dalam bentuk JSON sebagai respons
        res.json(users);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});
