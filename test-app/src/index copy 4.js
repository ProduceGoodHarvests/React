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
    let listArr = this.state.list.map((item, index) => {
      return (
        <li key={index}>
          <h2>{item.title}</h2>
          <p>{item.name}</p>
        </li>
      )
    })
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