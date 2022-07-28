import {h , resolveComponent} from 'vue';
import Categoryindex from './Categoryindex.vue';
import Categoryinsert from './Categoryinsert.vue';
import Categoryedit from './Categoryedit.vue';

const categoryRoutes=[
    {
        path:"category",
        name:"category",
        component: {
            render:()=> h(resolveComponent("router-view")),
        },
        children:[
            {
                path:"",
                name:"Categoryindex",
                component: Categoryindex,
              },
        ]
    },

];


export default categoryRoutes;