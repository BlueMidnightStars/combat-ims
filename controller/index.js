let titleModels = require('../models/article');
let classModels = require('../models/class');


const indexController = {
    allArticleL:async function(req,res,next){
        let arrange = req.query.arrange ? req.query.arrange : 0;
        let classId = req.query.classId;
        let zhi = arrange * 10;
        let lenght ;
        let data;
        let classList;
        if(classId){
            lenght = await titleModels.select({class_id:classId});
            data = await titleModels.select({class_id:classId}).limit(10).offset(zhi);
            classList = await classModels.all();
        }else{
             lenght = await titleModels.all();
             data = await titleModels.all().limit(10).offset(zhi);
             classList = await classModels.all();
        }
        console.log(classList);
        let formatNumber = n => {
            n = n.toString()
            return n[1] ? n : '0' + n
        }
        data.forEach(item => {
            let year   = item.created_time.getFullYear()
            let month  = item.created_time.getMonth() + 1
            let day    = item.created_time.getDate()
            let hour   = item.created_time.getHours()
            let minute = item.created_time.getMinutes()
            let second = item.created_time.getSeconds()
            item.created_time = [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
        })
        let a = lenght.length/10;
        let number =Math.ceil(a);
        res.locals.number = number;
        res.locals.data = data;
        res.locals.classList = classList;
        res.locals.classId = classId;
        res.render('homepage');
    },
    ArticleL:async function(req, res, next){
        let classList = await classModels.all();
        res.locals.classList = classList;
        let id = req.params.id;
        console.log(id);
        let data = await titleModels.select({id:id});
        console.log(data);
        res.locals.data = data;
        res.render('article');
    }
}
module.exports = indexController;