import React from 'react';
import ReactDOM from 'react-dom';
// let arr = ['小米', '华为', '苹果']
let arr = [<li>小米</li>, <li>华为</li>, <li>苹果</li>]
// 列表渲染
class Welcome extends React.Component {
  constructor(porps) {
    super()
  }
  render() {
    return (
      <div>
        {arr}
      </div>
    )
  }
}
ReactDOM.render(
  <Welcome></Welcome>,
  document.querySelector('#root')
)