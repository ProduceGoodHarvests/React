import React from 'react';
import ReactDOM from 'react-dom';
function ListItem(props) {
  return (
    <li >
      <h2>{props.index + 1}:ListItem {props.data.title}</h2>
      <p>{props.data.name}</p>
    </li>
  )
}
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
        <ListItem data={item} index={index}></ListItem>
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