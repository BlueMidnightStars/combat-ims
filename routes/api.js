var express = require('express');
var router = express.Router();
let usercontroller = require('./../controller/user');
let classcontroller = require('./../controller/class');
let articleController = require('../controller/article');
/* GET home page. */
// 登录页
// 登录判断
router.post('/login',usercontroller.judge);
// 用户列表页
// 获取所有用户
router.get('/user', usercontroller.allUser);
// 添加用户
router.post('/user', usercontroller.addUser);
// 修改用户
router.put('/user/:id', usercontroller.alterUser);
// 删除用户
router.delete('/user/:id', usercontroller.deleteUser);
// 分类管理
// 获取所有分类
router.get('/classify', classcontroller.allClass);
// 获取指定分类
router.get('/classify/:id', classcontroller.allClass);
// 添加分类
router.post('/classify', classcontroller.addClass);
// 修改分类
router.put('/classify/:id', classcontroller.amendClass);
// 删除分类
router.delete('/classify/:id', classcontroller.removeClass);
// 文章管理
// 获取所有文章
router.get('/article', articleController.alltitle);
// 获取指定分类id下的文章
// router.get('/article?classify_id:id', articleController.class_idTitle);
// 获取指定id的文章
router.get('/article/:id', articleController.id_title_content);
// 添加文章
router.post('/article', articleController.add_title_content);
// 修改文章
router.put('/article/:id', articleController.update_title_content);
// 删除文章
router.delete('/article/:id', articleController.delete_title_content);
module.exports = router;