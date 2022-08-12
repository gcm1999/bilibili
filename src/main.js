import { createApp } from "vue";
import App from "./App.vue";
import "./assets/reset.css";

import Header from "@/components/Header";

createApp(App)
  .component("Header", Header)
  .mount("#app");
