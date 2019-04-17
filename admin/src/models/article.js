import api from './api';
import requset from './request';

export default{
    get:function(params){
        return requset.get(api.article)
    },
    getId:function(id,params){
        return requset.get(api.articleItem(id));
    },
    post:function(params){
        return requset.post(api.article,params)
    },
    put:function(id,params){
        return requset.put(api.articleItem(id),params)
    },
    delete:function(id){
        return requset.delete(api.articleItem(id))
    },
}
