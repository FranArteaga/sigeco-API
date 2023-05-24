const Condominium = require("../models/condominium.model")

const create = () => {
    const condominium = Condominium.create()
    return condominium
}

const getAll = async () => {
    console.log("log In getALL")
    const condominiums = await Condominium.find({})
    return condominiums
}

const getById = async () => {
    console.log("log In getById")
    const condominium = await Condominium.findById({})
    return condominium
}

module.exports = {getAll, getById, create}