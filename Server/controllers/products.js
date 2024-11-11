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
    res.send(model.getAll())
})
    .get("/:id", (req, res, next) => {
        const id = req.params.id
        const user = model.get(+id)
        res.send(user)
    })
    .post("/", (req, res, next) => {
        const user = model.add(req.body)
        res.send(user)
    })
    .patch("/:id", (req, res, next) => {
        const id = req.params.id
        const user = model.update(+id, req.body)
        res.send(user)
    })
    .delete("/:id", (req, res, next) => {
        const id = req.params.id
        try {
            const ret = model.remove(+id)
            res.send(ret)
        } catch (err) {
            next(err.message)
        }
    })

module.exports = app
