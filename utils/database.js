const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hobbies',
    password: 'Bemal123#',
});

const selectAllData = (tableName) => {
    const sql = `SELECT * FROM ` + tableName;

    return new Promise((resolve, reject) => {
        conn.query(sql,(error,results,fields) => {

            if(error){
                reject(new Error(error.message));
            }

            const realData = Object.values(JSON.parse(JSON.stringify(results)));
            resolve(realData);
        });
    });
}

const selectRow = (tableName, findByCol, findVal) => {

    const sql = `SELECT * FROM ` + tableName + ` WHERE ` + findByCol + `="` + findVal + `"`;

    return new Promise((resolve, reject) => {
        conn.query(sql,(error,results,fields) => {

            if(error){
                reject(new Error(error.message));
            }

            const realData =  Object.values(JSON.parse(JSON.stringify(results)));
            resolve(realData);
        });
    });
}

const createNewUser = (firstName, lastName, email, age, imageUrl, password) => {
    const sql = `INSERT INTO users (firstName,lastName,email,age,imageUrl,password) VALUES ("` + firstName + `","` + lastName + `","` + email + `","` + age + `","` + imageUrl + `","` + password + `")`;
    conn.query(sql);
}

module.exports = {
    selectAllData,
    selectRow,
    createNewUser
};