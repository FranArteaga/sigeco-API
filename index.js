const server = require ("./src/server")




server.listen(8080, (request, response) => {
    console.log("Working Server!")
})