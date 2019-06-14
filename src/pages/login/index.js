import React, { Component } from "react";
// 路由跳转
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <p>请输入用户名和密码登录</p>
        <Link to="/">返回首页</Link>
      </div>
    );
  }
}

export default Login;
