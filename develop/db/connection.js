//connect too mySQL daTAbase
const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');

// connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Fiji2penguinsBunnyx64",
    database: "employeedb"
});
connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
    startApp();
});
