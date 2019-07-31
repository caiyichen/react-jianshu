import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./common/header";

import NotFound from "./common/notFound";
import routers from "./router";

function App() {
  console.log(111);
  return (
    <Provider store={store}>
      {/* 路由配置 */}
      <BrowserRouter>
        <Header />
        {/* Switch：用于渲染与路径匹配的第一个子 <Route> 或 <Redirect>。 */}
        <Switch>
          {routers.map(router => {
            return (
              <Route
                key={router.path}
                exact={!!router.exact}
                path={router.path}
                component={router.component}
              />
            );
          })}
          {/* 404页面 */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
