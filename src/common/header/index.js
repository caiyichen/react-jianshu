import React from "react";
import { connect } from "react-redux";
import "./style.scss";
import { actionCreator } from "./store";
import { Link } from "react-router-dom";

class Header extends React.Component {
  getSearchList() {
    const { focused, searchList } = this.props;
    if (focused) {
      return (
        <ul>
          {searchList.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      );
    }
  }

  render() {
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      searchList
    } = this.props;

    return (
      <header className="header flex">
        <div className="logo" />
        <section className="flex box-align-center flex-pack-between flex-grow">
          <section className="left-content flex">
            <Link className="link lighting-text" to="">
              发现
            </Link>
            <Link className="link" to="">
              关注
            </Link>
            <Link className="link" to="">
              消息<span className="badge">4</span>
            </Link>
            <input
              placeholder="搜索"
              className={focused ? "input-focus" : "input-blur"}
              onFocus={() => {
                return handleInputFocus(searchList);
              }}
              onBlur={handleInputBlur}
            />
            {this.getSearchList()}
          </section>

          <section className="right-content flex">
            <Link className="login" to="/login">
              登录
            </Link>
            <Link className="register-btn" to="/register">
              注册
            </Link>
            <Link className="write-article-btn" to="/writeArticle">
              写文章
            </Link>
          </section>
        </section>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]), // 等价于state.get("header").get("focused")；
    searchList: state.getIn(["header", "searchList"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(searchList) {
      searchList.size === 0 && dispatch(actionCreator.getSearchListAction());
      dispatch(actionCreator.getInputFocusAction());
    },
    handleInputBlur() {
      dispatch(actionCreator.getInputBlurAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
