const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "8889",
  database: "dragonQuiz"
});

let rechercheData = () => {
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM questions", function (err, result) {
      if (err) throw err;
      console.log(result);
      return result;
    });
  });
}

module.exports.rechercheData;
rechercheData();

