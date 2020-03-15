import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from '../views/CreateListView.js';

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
             component: createListView('NewsView')
           },
           {
             path: "/ask",
             name: "ask",
             component: createListView('AskView')
           },
           {
             path: "/jobs",
             name: "jobs",
             component: createListView('JobsView')
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