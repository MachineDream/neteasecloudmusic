import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import TestDialog from "@/components/dialog"

Vue.use(Router)

const Routes = new Router({
    routes:[
        {
            path:'',
            name:'helloword',
            component:HelloWorld
        },
        {
            path:'/test/dialog',
            name:'testDialog',
            component:TestDialog
        }

    ]
})

export default Routes