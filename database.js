var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    database:"ca1db_mysql_table",
    user:"root",
    password:"password"

})

module.exports = connection;