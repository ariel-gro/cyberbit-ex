import Vue from 'vue';
import Router from 'vue-router';
import Layouts from './views/layouts.vue';
import ConfigurationPage from './views/configurationPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layouts',
      component: Layouts,
    },
    {
      path: '/configuration',
      name: 'configuration',
      component: ConfigurationPage,
    },
  ],
});
