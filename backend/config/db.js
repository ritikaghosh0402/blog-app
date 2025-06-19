const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rg@040204',
  database: 'blog_db'
});
connection.connect(err => {
  if (err) throw err;
  console.log('MySQL connected!');
});
module.exports = connection;

