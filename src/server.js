const express = require("express")
const app = express()

//Middleware
app.use(express.json())


//Endpoint Home
app.get("/", (request, response) => {
    response.json({
        message: "Home Endpoint. Welcome to the Condominium Management System"
    })
})


//Exporting to the whole project
module.exports = app