var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
});

// 连接数据库
connection.connect();

module.exports = {
    getAllUsers(req, res) {
        connection.query('SELECT * from users', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            res.render('index.ejs', { users: results });
        });
    },
    getAllUsersByAjax(req, res) {
        connection.query('SELECT * from users', function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        });
    }
}
