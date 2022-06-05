const connection = require("./connect")

function getAllUsers(res){
    queryString = 'SELECT * FROM usuarios;';
    console.log(queryString);

    connection.query(queryString, (err, rows) => {
        if (err) {
            return console.log(" Aconteceu um erro ao consultar os dados...");
        }

        console.log(rows);
        res.status(200).json({rows})
    });
}

function login(req, res){
    console.log(req)
    queryString = `SELECT * FROM usuarios WHERE usuario = "${req.body.userName}" AND senha = "${req.body.password}";`;

    connection.query(queryString, (err, result) => {
        if (err) {
            return console.log(" Aconteceu um erro ao consultar os dados...");
        }

        res.status(200).json({result})
    });
}

module.exports = { getAllUsers, login }