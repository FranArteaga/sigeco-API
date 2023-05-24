const express = require("express")
const routerCondominium = require("./routes/condominium.route")
const app = express()

//Middleware
app.use(express.json())

//Middleware de ruta
app.use("/condominium", routerCondominium)

//Endpoint Home
app.get("/", (request, response) => {
    response.json({
        message: "Home Endpoint. Welcome to the Condominium Management System"
    })
})


//Exporting to the whole project
module.exports = app