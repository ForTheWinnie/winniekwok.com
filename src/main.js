import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Web from './plugins/web';

Vue.config.productionTip = false;

Vue.use(Web);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
