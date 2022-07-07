import App from './App.vue'
import { createApp } from 'vue'
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
const app = createApp(App);

app.use(Cell);
app.use(CellGroup);
app.use(Button);

app.mount('#app')