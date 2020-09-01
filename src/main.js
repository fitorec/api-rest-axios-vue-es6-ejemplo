import Vue from 'vue'
import App from './App.vue'
// Importamos y usamos la API
// import {ApiVue} from './Api/ApiBase';
// Vue.use(ApiVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
