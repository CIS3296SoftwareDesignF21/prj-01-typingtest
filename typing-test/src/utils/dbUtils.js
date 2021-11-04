var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'typetest-db.cba2qmzidbbp.us-east-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'typeTest123' 
});
 
connection.connect();
 
connection.query('SELECT * FROM typeTestdb.user_table;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end();