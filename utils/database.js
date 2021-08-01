const mysql = require('mysql2');

const connectDB = async () => {

    try{

        await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'hobbies',
            password: 'Bemal123#'
        });

    }catch (err){
        console.error(err.message);
    }
}

module.exports = connectDB;