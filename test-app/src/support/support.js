import React from 'react'
import './support.css'
class Tab extends React.Component {

    render() {
        let isB = false
        
        return (
            <div className={isB === true ? "b" : "h"}>
                <h2>我属于计时器</h2>
                <button onClick={this.fn}>开/关</button>
                {/* <button></button> */}
                <div></div>
                <div></div>
            </div>
        )
    }
    fn = () => {
        
        
    }
}

export default Tab;