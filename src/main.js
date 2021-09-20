import Vue from "vue";
import store from "@/store/store";
import App from "./App.vue";
import SmartTable from 'vuejs-smart-table'

Vue.config.productionTip = false;
Vue.use(SmartTable)

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

