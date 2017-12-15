import Vue from 'vue'
import App from './App.vue'

import AppStart from './component/startPage.vue';
import AppMain from './component/MainPage.vue';
import AppResult from './component/ResultPage.vue';



Vue.component('app-start' , AppStart);
Vue.component('app-main' , AppMain);
Vue.component('app-result' , AppResult);


new Vue({
  el: '#app',
  render: h => h(App)
})
