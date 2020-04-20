import Vue from 'vue'
import {MediaQueries} from 'vue-media-queries';
import App from './App.vue'
import Scss from '@/assets/style.scss'

const mediaQueries = new MediaQueries();
Vue.use(mediaQueries);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el: '#app',
  template: '<App/>',
  components: { App },
  mediaQueries: mediaQueries,
  Scss
}).$mount('#app')
