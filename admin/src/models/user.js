import api from './api';
import requset from './request';

export default{
    login: function(params){
        return requset.post(api.login,params);
    },
    get:function(params){
        return requset.get(api.user);
    },
    post:function(params){
        return requset.post(api.user,params);
    },
    put:function(id,params){
        return requset.put(api.userItem(id),params);
    },
    delete:function(id){
        return requset.delete(api.userItem(id))
    },
}
