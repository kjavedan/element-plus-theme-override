import { createApp } from "vue";
import App from "./App.vue";

// Element plus styles
import "~/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";
import router from "./routes";

const app = createApp(App);

app.use(router);
app.mount("#app");
