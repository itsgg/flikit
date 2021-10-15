import { createApp } from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// XXX: Load only the components we need
import "../node_modules/bulma/css/bulma.min.css";

import App from "./App.vue";

const app = createApp(App);

app.component("fa-icon", FontAwesomeIcon);

app.mount("#app");
