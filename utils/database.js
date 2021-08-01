const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hobbies',
    password: 'Bemal123#',
});

const selectAllData = (tableName) => {
    const sql = `SELECT * FROM ` + tableName;

    conn.query(sql,(error,results,fields) => {

        if(error){
            return console.error(error.message);
        }

        return Object.values(JSON.parse(JSON.stringify(results)));
    });
}

const selectRow = (tableName, findByCol, findVal) => {

    const sql = `SELECT * FROM ` + tableName + ` WHERE ` + findByCol + `="` + findVal + `"`;

    return new Promise((resolve, reject) => {
        conn.query(sql,(error,results,fields) => {

            if(error){
                reject(new Error(error.message))
            }

            const realData =  Object.values(JSON.parse(JSON.stringify(results)));
            resolve(realData);
        });
    })
}

module.exports = {
    selectAllData,
    selectRow
};