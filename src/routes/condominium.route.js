const express = require("express")
const { getAll, getById } = require("../usecases/condominium.usecase")

const router = express.Router()

router.get("/", async (request, response) => {
    try{
        const condominiums = await getAll()
        response.json({
            success: true,
            data: {
                condominiums
            }
        })
    }
    catch (err) {
        response.status(400)
        response.json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router