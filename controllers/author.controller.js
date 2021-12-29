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
