/*  B"H
 */
const model = require("../model/products")
const express = require("express")
const app = express.Router()

/* Four ways to send data to the server:
 * 1. Query String
 * 2. URL Parameters
 * 3. Headers
 * 4. Body
 */

app.get("/", (req, res, next) => {
    model
        .getAll()
        .then((x) => res.send(x))
        .catch(next)
})
    .get("/:id", (req, res, next) => {
        const id = req.params.id
        model
            .get(+id)
            .then((x) => res.send(x))
            .catch(next)
    })
    .post("/", (req, res, next) => {
        model
            .add(req.body)
            .then((x) => res.send(x))
            .catch(next)
    })
    .patch("/:id", (req, res, next) => {
        const id = req.params.id
        model
            .update(+id, req.body)
            .then((x) => res.send(x))
            .catch(next)
    })
    .delete("/:id", (req, res, next) => {
        const id = req.params.id

        model
            .remove(+id)
            .then((x) => res.send(x))
            .catch(next)
    })

module.exports = app
