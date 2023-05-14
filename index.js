require('dotenv').config()
const mongoose = require('mongoose')
const server = require("./src/server")

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
.then(() => {
    console.log("Connected to DB!")
    server.listen(8080, (request, response) => {
        console.log("Working Server!")
    })
})
.catch((err)=> {
    console.log("Error with server...", err)
})