// app/userController.js

const userService = require('./userService');

async function getUsers() {
    try {
        const users = await userService.getAllUsers();
        return users;
    } catch (error) {
        throw new Error('Failed to get users');
    }
}

module.exports = { getUsers };
