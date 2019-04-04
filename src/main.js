import Vue from 'vue'
//饿了么 UI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import store from './store'
import router from './router'
//axios Ajax请求插件
import axios from 'axios'
//CSS3 动画 animate.css
import 'animate.css';
// 将axios绑定到vue原型上
Vue.prototype.$axios = axios
// 上线全局请求配置
//axios.defaults.baseURL = 'api/v1/'

//滚动条优化插件
import vuescroll from 'vuescroll/dist/vuescroll-native';
// 导入vuescroll.css文件
import 'vuescroll/dist/vuescroll.css';
//引用字体css
import 'font-awesome/css/font-awesome.min.css'

//将引用组件绑定到Vue上
Vue.use(vuescroll,{
  //全局配置属性
  ops: {
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: 'rgba(0,0,0,.6)',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: '6px'
    }
  },
  name:'myscroll'
});

Vue.use(ElementUI);
// Vue 的全局配置
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
