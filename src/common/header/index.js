import React from "react";
import { connect } from "react-redux";
import "./style.css";
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
      <header style={{ border: "1px solid red" }}>
        <section>
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
        <section>
          <div>登录</div>
          <Link to="/writeArticle">写文章</Link>
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
