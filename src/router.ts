import Vue from 'vue';
import Router from 'vue-router';
import Form from './views/Form.vue';
import Builder from './views/Builder.vue';
import BuilderLocal from './views/BuilderLocal.vue';
import Submission from './views/Submission.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
    },
    {
      path: '/builder',
      name: 'builder',
      component: Builder,
    },
    {
        path: '/builder-local',
        name: 'builder-local',
        component: BuilderLocal,
    },
    {
        path: '/submission',
        name: 'submission',
        component: Submission,
    },
  ],
});
