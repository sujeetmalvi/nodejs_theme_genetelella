const { con }  = require('../database');

exports.author_list = async (req, res) => {
    try {
          con.query("SELECT * FROM temp.authors", function (err, result) {
          if (err) throw err;
            res.render('../views/table', { title: 'Author Table',data:result });
          });
        //});
        //con.close();
    }
    catch(error) {
        return "";
    }
}

exports.author_create = async (req, res) => {
  try {

        con.query("INSERT INTO temp.authors(first_name,last_name,email,birthdate,added,auth_pass) values('"+req.body.first_name+"','"+req.body.last_name+"','"+req.body.email_id+"','"+req.body.birthday+"',now(),md5('123456'))", function (err, result) {
        if (err) throw err;
        res.render('author/form',{response:'Author Created'});
        });
      //});
      //con.close();
  }
  catch(error) {
      return "";
  }
}

exports.author_edit = async (req, res) => {
  try {
        var id = 5; //req.query.id;
        con.query("SELECT * FROM temp.authors WHERE id="+id+" ", function (err, result) {
        if (err) throw err;
          console.log(result);
          res.render('author/form',{response:'edit Author',data:result[0]});
        });
      //});
      //con.close();
  }
  catch(error) {
      return "";
  }
}
