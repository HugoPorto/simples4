const knex = require("./knexfile")


function getAllUsers(){
    return knex("usuarios").select("*")
}

module.exports = { getAllUsers }