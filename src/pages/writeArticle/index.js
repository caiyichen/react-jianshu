import React, { Component } from "react";
// 路由跳转
import { Redirect } from "react-router-dom";

class WriteArticle extends Component {
  render() {
    // 登录鉴权（「写文章」需要判断是否登录，则在写文章页面来守卫判断即可）
    if (this.props.loginStatus) {
      return <div>请写文章</div>;
    } else {
      // 如果未登录，则直接跳转到登录页
      return <Redirect to="/login" />;
    }
  }
}

export default WriteArticle;
