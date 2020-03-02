import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
         mode: 'history',
         routes: [
           {
             path: '/',
             name: "news",
             redirect: '/news'
           },
           {
             path: "/news",
             name:"news",
             component: NewsView
           },
           {
             path: "/ask",
             name: "ask",
             component: AskView
           },
           {
             path: "/jobs",
             name: "jobs",
             component: JobsView
           },
           {
             path: "/item/:id",
             name:"item",
             component: ItemView
           },
           {
             path: "/user/:id",
             name: "user",
             component: UserView
           },
          ]
       });