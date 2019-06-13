import React, { Component } from "react";
// 路由跳转
import { Link, withRouter } from "react-router-dom";
import "./style.scss";

class Detail extends Component {
  render() {
    return (
      <div>
        {/* 获取动态路由的参数值 */}
        <p>title：详情页{this.props.match.params.id}</p>
        <Link to="/">返回首页</Link>
      </div>
    );
  }
}

// react-loadable：异步加载组件，即当需要组件时才会加载。
// withRouter:使用了react-loadable异步加载组件时，让Detail组件有能力获取到router里的所有参数和内容
export default withRouter(Detail);
