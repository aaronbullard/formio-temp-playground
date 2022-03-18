import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Logger from './modules/logger';
import './styles.scss';

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
  router,
  store,
  render: (h) => h(App),
  mounted() {
    // loadModules(this.$window);
  },
}).$mount('#app');
