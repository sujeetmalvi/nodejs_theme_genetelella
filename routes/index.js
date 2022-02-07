var express = require('express');
//var mysql = require('mysql');
var router = express.Router();
const { dbhome } = require('../controllers/mycontroller.controller');
const { author_list,author_create,author_edit,author_update } = require('../controllers/author.controller');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'This is home page' });
});

router.get('/dashboardb', function (req, res, next) {
  res.render('dashboardb');
});
router.get('/dashboardc', function (req, res, next) {
  res.render('dashboardc');
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/page', function (req, res, next) {
  res.render('page');
});

router.get('/form', function (req, res, next) {
  res.render('author/form',{response:'create Author',data:{}});
});

router.post('/create_author', author_create);
router.get('/edit_author', author_edit);
router.get('/update_author', author_update);




router.get('/table', author_list);

router.get('/mycontroller', dbhome);

router.post('/save_contact', function (req, res, next) {
  console.log(req.body);
  res.render('contact_submit', { title: 'contact form submitted.', data: req });
});


module.exports = router;
