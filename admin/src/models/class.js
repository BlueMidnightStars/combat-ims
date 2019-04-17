import api from './api';
import requset from './request';

export default{
    get:function(params){
        return requset.get(api.classify);
    },
    post:function(params){
        return requset.post(api.classify,params);
    },
    put:function(id,params){
        return requset.put(api.classifyItem(id),params);
    },
    delete:function(id){
        return requset.delete(api.classifyItem(id));
    },
}
