import Vue from 'vue';
import App from './app.vue';

import './assets/style/global.styl';

const root = document.querySelector('#global');

new Vue({
  render: createElement => createElement(App)
}).$mount(root);
