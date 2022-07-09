import App from './App.vue'
import { createApp } from 'vue'
import { router } from './router';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Image as VanImage } from 'vant';
import { List } from 'vant';
import { Tab, Tabs } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Step, Steps } from 'vant';
import { Tag } from 'vant';

const app = createApp(App);

app.use(Cell);
app.use(CellGroup);
app.use(Button);
app.use(VanImage);
app.use(List);
app.use(router);
app.use(Tab);
app.use(Tabs);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Step);
app.use(Steps);
app.use(Tag);
app.mount('#app')