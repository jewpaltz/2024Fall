/*  B"H
 */

/** @type {{ items: Product[] }} */
const data = require("../data/products.json")

/**
 * @template T
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/**
 * @typedef {import("../../Client/src/models/products").Product} Product
 */

/**
 * Get all users
 * @returns {Promise<DataListEnvelope<Product>>}
 */
async function getAll() {
    return {
        isSuccess: true,
        data: data.items,
        total: data.items.length,
    }
}

/**
 * Get a user by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Product>>}
 */
async function get(id) {
    const item = data.items.find((user) => user.id == id)
    return {
        isSuccess: !!item,
        data: item,
    }
}

/**
 * Add a new user
 * @param {Product} user
 * @returns {Promise<DataEnvelope<Product>>}
 */
async function add(user) {
    user.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1
    data.items.push(user)
    return {
        isSuccess: true,
        data: user,
    }
}

/**
 * Update a user
 * @param {number} id
 * @param {Product} user
 * @returns {Promise<DataEnvelope<Product>>}
 */
async function update(id, user) {
    const userToUpdate = get(id)
    Object.assign(userToUpdate, user)
    return {
        isSuccess: true,
        data: userToUpdate,
    }
}

/**
 * Remove a user
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const itemIndex = data.items.findIndex((user) => user.id == id)
    if (itemIndex === -1)
        throw { isSuccess: false, message: "Item not found", data: id }
    data.items.splice(itemIndex, 1)
    return { isSuccess: true, message: "Item deleted", data: id }
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
}
