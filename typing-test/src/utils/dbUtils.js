//First Successful Connection/Query

var mysql = require('mysql');
var connection;

function initCon(){
  connection = mysql.createConnection({
    host     : 'typetest-db.cba2qmzidbbp.us-east-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'typeTest123' 
  });
  connection.connect();
}

function endConn(){
  connection.end();
}

function sqlBuilder(type, cols, values, table){
  var sqlStr = '';

  if(type == 'i'){
    sqlStr += 'INSERT INTO typeTestdb.' + table + ' (';
    for(var j = 0; j < cols.length; j++){
      if(j == cols.length-1){
        sqlStr += cols[j];
      }else{
      sqlStr += cols[j] + ',';
      }
    }
    sqlStr += ') VALUES (';
    for(var i = 0; i < values.length; i++){
      if(i == values.length-1){
        sqlStr += '\'' + values[i] + '\'';
      }else{
      sqlStr += '\'' +values[i] + '\',';
      }
    }
    sqlStr += ');';
  } 
  
  else if(type == 's'){
    sqlStr += 'SELECT '
    for(var i = 0; i < cols.length; i++){
      if(i == cols.length-1){
        sqlStr += cols[i];
      }else{
      sqlStr += cols[i] + ',';
      }
    }
    sqlStr += ' FROM typeTestdb.' + table;
  }

  return sqlStr;
}

initCon();

connection.query(sqlBuilder('s', ['*'], [], 'user_table'), function (error, results) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.query(sqlBuilder('i', ['display_name' , 'user_email' , 'password'], ['aaa', 'test2', '5678'], 'user_table'), function (error, results) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

endConn();