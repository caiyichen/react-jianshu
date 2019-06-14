import React, { Component } from "react";
// 路由跳转
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        home
        <ul>
          <li>
            <Link to="/detail">详情页【不匹配】</Link>
          </li>
          <li>
            <Link to="/detail/2">详情页2</Link>
          </li>
          <li>
            <a href="/detail">a标签跳转到详情页</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
