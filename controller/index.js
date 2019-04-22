let articleModels = require('../models/article');
let classModels = require('../models/class');
const { formatTime } = require('./../utils/date.js');


const indexController = {
    allArticleL:async function(req,res,next){
        let currentPage = req.query.arrange ? req.query.arrange : 0;
        let classId = req.query.classId;
        let haveRead = currentPage * 10;
        let params = {};
        if(classId){
            params.class_id = classId
        }
        let allArticle = await articleModels.select(params);
        let data = await articleModels.select(params).limit(10).offset(haveRead);
        let classList = await classModels.all();
        let total = allArticle.length/10;
        let number =Math.ceil(total);
        res.locals.number = number;
        res.locals.data = data.map((item)=>{
            item.created_time_display = formatTime(item.created_time);
            return item
          });;
        res.locals.classList = classList;
        res.locals.classId = classId;
        res.render('homepage');
    },
    ArticleL:async function(req, res, next){
        let classList = await classModels.all();
        res.locals.classList = classList;
        let id = req.params.id;
        let data = await articleModels.select({id:id});
        res.locals.data = data;
        res.render('article');
    }
}
module.exports = indexController;