var express = require('express');
var mysql = require('mysql');
var router = express.Router();
const { dbhome } = require('../controllers/mycontroller.controller');
const { author_list } = require('../controllers/author.controller');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'This is home page' });
  // http://localhost:3000/?id=8
//  var id = req.query.id;
  //console.log(id);
  // var con = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: ""
  // });
  // con.connect(function (err) {
  //   if (err) throw err;
  //   con.query("SELECT * FROM wordpress.wp_options where option_id="+id+" limit 0,10", function (err, result) {
  //     if (err) throw err;
  //     res.render('index', { title: 'This is home page',data:result });
  //   });
  // });
});

router.get('/dashboardb', function (req, res, next) {
  res.render('dashboardb');
});

router.get('/page', function (req, res, next) {
  res.render('page');
});

router.get('/table', author_list);

router.get('/mycontroller', dbhome);

router.post('/save_contact', function (req, res, next) {
  console.log(req.body);
  res.render('contact_submit', { title: 'contact form submitted.', data: req });
});


module.exports = router;
