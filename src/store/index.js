import { createStore } from "vuex";
// 导入全局样式vuex
import moduleStyle from './modules/moduleStyle'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  // vuex模块化
  modules: {
    // 全局样式
    'my-style': moduleStyle
  },
});
