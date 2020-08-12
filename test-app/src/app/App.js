import React from 'react';
import Tab from '../support/support'
class Time extends React.Component {
  render() {
    let time = new Date().toLocaleString()

    return (
      <div>
        <h1>当前时间是:{time}</h1>
        <h1>下边是我儿子</h1>
        <Tab></Tab>
        <h1>上边是我儿子</h1>
      </div>
    )
  }
}
export default Time;

