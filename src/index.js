import './style.scss';

import { createApp } from 'vue';

import * as VueRouter from 'vue-router';

import App from './App.vue';
import ToDoList from './pages/ToDoList.vue';
import Modals from './pages/Modals.vue';
import Clicker from './pages/Clicker.vue';
import Chuck from './pages/Chuck.vue';
import PikelRik from './pages/PikelRik.vue';
import Game from './pages/Game.vue';
import Chat from './pages/Chat.vue';


const routes = [
    { path: '/', component: PikelRik, name: 'PikelRik xd'},
    { path: '/clicker', component: Clicker, name: 'Gay DOG Clicker'},
    { path: '/modal', component: Modals, name: 'Modal'},
    { path: '/todolist', component: ToDoList, name: 'To-Do List'},
    { path: '/chuck', component: Chuck, name: 'Chjoke'},
    { path: '/Game', component: Game, name: 'Game'},
    { path: '/Chat', component: Chat, name: 'Chat'},
    

  ]

  const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes
  })


let app = createApp(App);
app.use(router);
app.mount('#app');
