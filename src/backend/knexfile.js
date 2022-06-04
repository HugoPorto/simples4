const knex = require("knex")

// const connectedKnex = knex({
//     client: "sqlite3",
//     connection: {
//         filename: "./simples.db"
//     },
//     useNullAsDefault: true
// })

const connectedKnex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : '12345',
        database : 'simples2'
    }
})

module.exports = connectedKnex