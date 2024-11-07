/*  B"H
 */

/** @type {{ items: User[] }} */
const data = require("../data/users.json")

/**
 * @typedef {import("../../Client/src/models/users").User} User
 */

/**
 * Get all users
 * @returns {User[]}
 */
function getAll() {
    return data.items
}

/**
 * Get a user by id
 * @param {number} id
 * @returns {User}
 */
function get(id) {
    return data.items.find((user) => user.id == id)
}

/**
 * Add a new user
 * @param {User} user
 * @returns {User}
 */
function add(user) {
    user.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1
    data.items.push(user)
    return user
}

/**
 * Update a user
 * @param {number} id
 * @param {User} user
 * @returns {User}
 */
function update(id, user) {
    const userToUpdate = get(id)
    Object.assign(userToUpdate, user)
    return userToUpdate
}

/**
 * Remove a user
 * @param {number} id
 * @returns {{ success: boolean, message: string, id: number }}
 */
function remove(id) {
    const userIndex = data.items.findIndex((user) => user.id == id)
    data.items.splice(userIndex, 1)
    return { success: true, message: "User deleted", id: id }
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
}
