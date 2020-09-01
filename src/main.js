import Vue from 'vue'
import App from './App.vue'
// Importamos y usamos la API
import {ApiVue} from './Api/Api';
Vue.use(ApiVue);
// Debug
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
