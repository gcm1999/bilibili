import { createApp } from "vue";
import App from "./App.vue";
import "./assets/reset.css";
import router from "./router";

import Header from "@/components/Header";

createApp(App).component("Header", Header).use(router).mount("#app");
