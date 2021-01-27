import Vue from "vue";
import VueMeteorTracker from "vue-meteor-tracker";
import "../imports/ui/plugins";
import App from "../imports/ui/App.vue";
import router from "./router";

Meteor.startup(() => {
  Vue.use(VueMeteorTracker);
  new Vue({
    router,
    el: "#app",
    ...App,
  });
});
