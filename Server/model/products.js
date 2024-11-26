/*  B"H
 */

/** @type {{ items: Product[] }} */
const data = require("../data/products.json")
const { getConnection } = require("./supabase")
const conn = getConnection()

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
    const { data, error, count } = await conn
        .from("products")
        .select("*", { count: "estimated" })
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
        total: count,
    }
}

/**
 * Get a user by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Product>>}
 */
async function get(id) {
    const { data, error } = await conn
        .from("products")
        .select("*, reviews(*)")
        .eq("id", id)
        .single()
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    }
}

/**
 * Add a new product
 * @param {Product} product
 * @returns {Promise<DataEnvelope<Product>>}
 */
async function add(product) {
    const { data, error } = await conn
        .from("products")
        .insert([
            {
                images: product.images,
                category: product.category,
                description: product.description,
                price: product.price,
                title: product.title,
                dimensions: product.dimensions,
                minimumOrderQuantity: product.minimumOrderQuantity,
                rating: product.rating,
                returnPolicy: product.returnPolicy,
                tags: product.tags,
                weight: product.weight,
                thumbnail: product.thumbnail,
                brand: product.brand,
            },
        ])
        .select("*")
        .single()

    if (product.reviews?.length) {
        await conn
            .from("reviews")
            .insert(
                product.reviews.map((review) => ({
                    productId: data.id,
                    rating: review.rating,
                    comment: review.comment,
                    reviewerEmail: review.reviewerEmail,
                    reviewerName: review.reviewerName,
                    date: review.date,
                }))
            )
            .select("*")
    }

    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    }
}

async function seed() {
    for (const product of data.items) {
        await add(product)
    }
}

/**
 * Update a user
 * @param {number} id
 * @param {Product} product
 * @returns {Promise<DataEnvelope<Product>>}
 */
async function update(id, product) {
    const { data, error } = await conn
        .from("products")
        .update({
            images: product.images,
            category: product.category,
            description: product.description,
            price: product.price,
            title: product.title,
            dimensions: product.dimensions,
            minimumOrderQuantity: product.minimumOrderQuantity,
            rating: product.rating,
            returnPolicy: product.returnPolicy,
            tags: product.tags,
            weight: product.weight,
            thumbnail: product.thumbnail,
            brand: product.brand,
            updatedAt: new Date().toISOString(), // mark it with the latest timestamp every time it's updated
        })
        .eq("id", id)
        .select("*")
        .single()

    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    }
}

/**
 * Remove a user
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const { data, error } = await conn
        .from("products")
        .delete()
        .eq("id", id)
        .select("*")
        .single()

    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    }
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
    seed,
}
