// app/userService.js

const fs = require('fs');
const path = require('path');

// Fungsi untuk membaca data pengguna dari file
function getAllUsers() {
    const filePath = path.join(__dirname, '../data/users.json');
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const users = JSON.parse(data);
                resolve(users);
            }
        });
    });
}

module.exports = { getAllUsers };
