import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入全局样式
import '@/assets/css/global.less'
// 导入挂载element-plus方法
import mountElements from '@/element/index'
// 导入element-plus样式
import 'element-plus/es/components/message/style/css'
// 导入插件
import plugins from '@/plugins/index'

const app = createApp(App)

// 挂载element-plus组件
mountElements(app)
// 安装插件
app.use(plugins)

app.use(store).use(router).mount("#app");
