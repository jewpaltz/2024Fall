/*  B"H
 */
const express = require("express")
const app = express()
const userController = require("./controllers/users")

const PORT = 3000

app.get("/", (req, res) => {
    res.send("Hello World")
})
    .get("/about", (req, res) => {
        res.send("About Us")
    })
    .use("/users", userController)

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT)
})
