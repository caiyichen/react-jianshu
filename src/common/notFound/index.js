import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>抱歉，您访问的页面不存在~</p>
      <Link to="/">返回首页</Link>
    </div>
  );
};

export default NotFound;
