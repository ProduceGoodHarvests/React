import React from 'react';
import ReactDOM from 'react-dom';
// function ListItem(props) {
//   return (
//     <li >
//       <h2>{props.index + 1}:ListItem {props.data.title}</h2>
//       <p>{props.data.name}</p>
//     </li>
//   )
// }
class WelcomeTwo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      < li onClick={(e) => { this.clickOne(this.props.index, this.props.data.title, e) }}>
        <h2>{this.props.index + 1}: {this.props.data.title}</h2>
        <p>教师名字：{this.props.data.name}</p>
      </li >
    )
  }
  clickOne = (index, title, event) => {
    alert(index + 1 + "-" + title)
  }
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
        },{
          title: "政治",
          name: "赵六",
        },{
          title: "政治",
          name: "赵六",
        },{
          title: "政治",
          name: "赵六",
        },
      ]
    }
  }
  render() {
    console.log(this.state.list)
    let listArr = this.state.list.map((item, index) => {
      return (
        <WelcomeTwo data={item} index={index}></WelcomeTwo>
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