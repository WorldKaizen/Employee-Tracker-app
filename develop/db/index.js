// functions that will query our database

const connections = require ('./connection');
class DB {
    constructor(connection){
        this.connection=connection;
    }
    createEmployee(employee){
        return this.connection.query('INSERT INTO employee SET ?', employee);
    }
}
module.exports = new DB (connection);