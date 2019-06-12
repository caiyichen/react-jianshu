import React from "react";
import Loadable from "react-loadable";
import Loading from "../../common/loading";

const LoadableComponent = Loadable({
  loader: () => import("./index"),
  loading: () => {
    return <div>正在加载...</div>;
  } // Loading
});

// 无状态组件
export default () => {
  return <LoadableComponent />;
};

// export default class App extends React.Component {
//     render() {
//         return <LoadableComponent />;
//     }
// }
