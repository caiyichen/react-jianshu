import Home from "../pages/home";
import Login from "../pages/login";
import Detail from "../pages/detail/loadable"; // 异步加载Detail组件
import WriteArticle from "../pages/writeArticle";

// 路由配置
const routers = [
  { exact: true, path: "/", component: Home },
  { exact: true, path: "/login", component: Login },
  { exact: true, path: "/detail/:id", component: Detail }, // 动态路由
  { exact: true, path: "/writeArticle", component: WriteArticle }
];

export default routers;
