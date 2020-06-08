import Vue from 'vue'
import axios from 'axios'

axios.defaults.headers.common['token'] = 'token'

Vue.use(axios)

function postHttp(url,data){
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then(function(resopnse){
            if(resopnse.code==200){
                resolve(resopnse.data)
            }
        }).catch((err)=>{
            reject(err.data)
        })
    })
}


function getHttp(url,data){
    return new Promise((resolve,reject)=>{
        axios.get(url,data).then(function(resopnse){
            if(resopnse.code==200){
                resolve(resopnse.data)
            }
        }).catch((err)=>{
            reject(err.data)
        })
    })
}

export default {
    post:postHttp,
    get:getHttp
}