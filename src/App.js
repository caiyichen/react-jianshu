import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable"; // 异步加载Detail组件
import WriteArticle from "./pages/writeArticle";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route
          path="/"
          exact
          render={() => {
            return <Home />;
          }}
        />
        <Route
          path="/login"
          exact
          render={() => {
            return <div>login</div>;
          }}
        />
        {/* path 动态路由 */}
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/writeArticle" exact component={WriteArticle} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
