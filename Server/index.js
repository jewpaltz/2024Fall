/*  B"H
 */
const express = require("express")
const app = express()
const userController = require("./controllers/users")
const productController = require("./controllers/products")

const PORT = 3000

// Middleware
app.use(express.json())
app.use(express.static(__dirname + "/dist"))

// Controllers
app.get("/", (req, res, next) => {
    res.send("Hello World")
})
    .get("/about", (req, res, next) => {
        res.send("About Us")
    })
    .use("/api/v1/users", userController)
    .use("/api/v1/products", productController)

    .get("*", (req, res, next) => {
        res.sendFile(__dirname + "/dist/index.html")
    })

console.log("Step #1")
app.listen(PORT, (err, data) => {
    console.log("Step #2")
    console.log("Server is running at http://localhost:" + PORT)
})
console.log("Step #3")

/*  Four types of async methods
    1. Node Style Callbacks
    2. Pipelines
    3. Promises
    4. Async/Await
*/
