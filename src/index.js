import Vue from 'vue';
import App from './app.vue';

import './assets/style/test.css';
import './assets/style/test-stylus.styl';
import './assets/images/bg.jpg';

const root = document.querySelector('#global');

new Vue({
  render: createElement => createElement(App)
}).$mount(root);
