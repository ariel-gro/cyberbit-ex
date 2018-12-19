import Vue from 'vue';
import VueDraggable from 'vue-draggable';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueDraggable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
