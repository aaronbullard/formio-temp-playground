import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Logger from './modules/logger';
import './styles.scss';
// import CheckMatrix from './custom/CheckMatrix';
import CheckMatrix from './custom/CheckMatrixLight/components/CheckMatrix.js';
import RandoVue from './custom/Rando/components/RandoVue.js';
import Counter from '@/components/Counter';

// window.Formio.use({
//     components: {
//         checkmatrix: CheckMatrix,
//     },
// });
window.Formio.Components.addComponent('checkmatrix', CheckMatrix);
window.Formio.Components.addComponent('randovue', RandoVue);

const loadModules = (window: any) => {
    [
        Logger,
    ].forEach((module: any) => {
        window.Formio.registerPlugin(module);
    });
};

Vue.config.productionTip = false;

Vue.prototype.$window = window;

const app = new Vue({
  components: {
      Counter,
  },
  router,
  store,
  render: (h) => h(App),
  mounted() {
    // loadModules(this.$window);
  },
}).$mount('#app');

window.app = app;
