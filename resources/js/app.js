/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import VueReact from "vue-react";
import VueTouch from "vue-touch";
import Vue from "vue";

import router from "./routes";
import store from "./store";
// import layoutMixin from "./mixins/layout";
import ReactComponents from "./reactComponents";

require("./bootstrap");

window.Vue = require("vue");

/**
 * Vue Plugins
 */
Vue.use(VueReact); //Plugin for loading react components
Vue.use(VueTouch);

/**
 * Vue Mixins
 */
// Vue.mixin(layoutMixin);

/**
 * Vue configurations
 */
Vue.config.productionTip = false;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component("vue-app", require("./pages/App.vue").default);
Vue.component(
    "v-content-loader",
    require("./components/ContentLoader").default
);

/**
 * Register React Components
 */
Object.keys(ReactComponents).map(key =>
    Vue.react(`Big${key}`, ReactComponents[key])
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    store,
    router
});
