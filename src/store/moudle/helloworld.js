import types from './../types'
import api from '@/fetch/api.js'

const state = {
    msg:"neteasecloudmusic"
}

const getters = {
    msg:(state) => state.msg
}

const actions = {
    initMsg({commit}){
        api.test('/test/test',{}).then(res=>{
            commit(types.VUEX_TEST,res)
        })
    }
}

const mutations = {
    [types.VUEX_TEST](res){
        state.msg = state.msg.toUpperCase()
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}