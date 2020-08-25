import React from 'react';
import ReactDOM from 'react-dom';
import feiyan from './list.json'
import './csss.css'
// import './spider.js'
let objNew = []
for (let i in feiyan.data.provinceCompare) {
    feiyan.data.provinceCompare[i].name = i
    objNew.push(feiyan.data.provinceCompare[i])
}
console.log(objNew)
class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>国内疫情</h1>
                <ul>
                    <li>
                        <span>省份</span>
                        <span>新增</span>
                        <span>死亡</span>
                        <span> 治愈</span>
                        <span>累计清零天数</span>
                    </li>
                    {this.props.list.map((item, i) => {
                        return (
                            <li >
                                <span>{item.name}</span>
                                <span>{item.nowConfirm}</span>
                                <span>{item.dead}</span>
                                <span>{item.heal}</span>
                                <span>{item.nowConfirm}</span>
                            </li>
                        )
                    })}

                </ul>
            </div>
        )
    }
}
ReactDOM.render(<Welcome list={objNew} />, document.querySelector("#root"))