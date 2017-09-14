import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
    ]
});

export default router;