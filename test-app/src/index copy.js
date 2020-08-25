import React from 'react';
import ReactDOM from 'react-dom';

// class 
function Login(porps) {
  return (<div>欢迎登陆</div>)
}
function UnLogin(porps) {
  return (<div>请先登录</div>)
}

class ParentCom extends React.Component {
  constructor(porps) {
    super(porps)
    this.state = {
      isLogin: false
    }
  }
  render() {
    if (this.state.isLogin) {
      return <Login></Login>
    } else {
      return <UnLogin></UnLogin>
    }
  }
}
ReactDOM.render(
  <ParentCom></ParentCom>
  , document.querySelector('#root')
)