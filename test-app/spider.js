// import axios from 'axios'
let axios = require('axios');
(async function () {
    let res = await axios.get('https://c.m.163.com/ug/api/wuhan/app/index/feiyan-data-list?t=' + new Date().getTime())
    // console.log(res)
    let list = []
    list = res
    console.log(list)
}())
