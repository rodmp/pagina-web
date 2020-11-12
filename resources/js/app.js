/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import VueReact from "vue-react";
import { VuePlugin } from "vuera";
import { Table, Grid, GridItem } from "@bigcommerce/big-design";
import {
    ArrowBackIcon,
    ArrowForwardIcon,
    ExpandLessIcon,
    ExpandMoreIcon,
} from "@bigcommerce/big-design-icons";

require("./bootstrap");

window.Vue = require("vue");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component("main-page", require("./pages/App.vue").default);
Vue.component("home-page", require("./pages/AppHome.vue").default);

Vue.use(VueReact);
Vue.use(VuePlugin);

Vue.react("BigTable", Table);
Vue.react("BigGrid", Grid);
Vue.react("BigGridItem", GridItem);
Vue.react("BigArrowBackIcon", ArrowBackIcon);
Vue.react("BigArrowForwardIcon", ArrowForwardIcon);
Vue.react("BigExpandLessIcon", ExpandLessIcon);
Vue.react("BigExpandMoreIcon", ExpandMoreIcon);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
});
