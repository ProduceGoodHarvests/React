import React from 'react';
import ReactDOM from 'react-dom';
class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          title: "语文",
          name: "张三",
        }, {
          title: "数学",
          name: "李四",
        }, {
          title: "英文",
          name: "王五",
        },
      ]
    }
  }
  render() {
    console.log(this.state.list)
    let listArr = [];
    for (let i = 0; i < this.state.list.length; i++) {
      let item = (
        <li>
          <h2>{this.state.list[i].title}</h2>
          <p>{this.state.list[i].name}</p>
        </li>
      )
      listArr.push(item)
    }
    return (
      <div>
        <h1>课程</h1>
        <ul>
          {listArr}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<Welcome />, document.querySelector("#root"))