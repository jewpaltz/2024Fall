/*  B"H
 */
const data = require("../data/users.json")
const express = require("express")
const app = express.Router()

app.get("/", (req, res) => {
    res.send(data.items)
})
    .get("/:id", (req, res) => {
        const id = req.params.id
        const user = data.items.find((user) => user.id == id)
        res.send(user)
    })
    .post("/", (req, res) => {
        const user = req.body
        user.id =
            data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1
        data.items.push(user)
        res.send(user)
    })
    .patch("/:id", (req, res) => {
        const id = req.params.id
        const user = data.items.find((user) => user.id == id)
        Object.assign(user, req.body)
        res.send(user)
    })
    .delete("/:id", (req, res) => {
        const id = req.params.id
        const userIndex = data.items.findIndex((user) => user.id == id)
        data.items.splice(userIndex, 1)
        res.send({
            success: true,
            message: "User deleted",
            id: id,
        })
    })

module.exports = app
