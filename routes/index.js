var express = require('express');
var router = express.Router();
var indexController = require('./../controller/index')

/* GET home page. */
router.get('/',indexController.allArticleL);
router.get('/class/:id',indexController.allArticleL);
router.get('/article/:id',indexController.ArticleL);
router.get('/admin/*', function(req, res, next){
  res.render('admin');
})

module.exports = router;
