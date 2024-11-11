/*  B"H
 */

/** @type {{ items: Product[] }} */
const data = require("../data/products.json")

/**
 * @typedef {import("../../Client/src/models/products").Product} Product
 */

/**
 * Get all users
 * @returns {Promise<Product[]>}
 */
async function getAll() {
    return data.items
}

/**
 * Get a user by id
 * @param {number} id
 * @returns {Promise<Product>}
 */
async function get(id) {
    return data.items.find((user) => user.id == id)
}

/**
 * Add a new user
 * @param {Product} user
 * @returns {Promise<Product>}
 */
async function add(user) {
    user.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1
    data.items.push(user)
    return user
}

/**
 * Update a user
 * @param {number} id
 * @param {Product} user
 * @returns {Promise<Product>}
 */
async function update(id, user) {
    const userToUpdate = get(id)
    Object.assign(userToUpdate, user)
    return userToUpdate
}

/**
 * Remove a user
 * @param {number} id
 * @returns {Promise<{ success: boolean, message: string, id: number }>}
 */
async function remove(id) {
    const itemIndex = data.items.findIndex((user) => user.id == id)
    if (itemIndex === -1)
        throw { success: false, message: "Item not found", id: id }
    data.items.splice(itemIndex, 1)
    return { success: true, message: "Item deleted", id: id }
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
}
