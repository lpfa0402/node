/*
 * @Author: Lpf
 * @Date: 2021-04-07 14:41:14
 * @LastEditTime: 2021-04-07 14:57:45
 * @Description: fs.createWriteStream('output.txt'); 写入流
 */

let fs = require('fs');

/**
 * @description: 创建写入流
 * @param {*} fs.createWriteStream('文件路径'， [可选配置操作])
 * @return {*}
 */
let ws = fs.createWriteStream('hello.txt',{flags: 'w', encoding: 'utf-8'});
// 对写入流事件进行监听
/**
 * @description: ws.on：监听事件
 * @param {*} open：打开。 close：关闭
 * @param {*} function
 * @return {*}
 */
ws.on('open', function() {
    console.log('文件打开')
})
ws.on('ready', function() {
    console.log('准备进行文件写入')
})
ws.on('close', function() {
    console.log('文件关闭')
})

// 执行流式写入事件
ws.write('helloworld', function(err) {
    if(err){
        console.log(err)
    } else {
        console.log('内容流入完成')
    }
});
ws.end(function(){
    console.log('关闭文件写入')
}); // 结束事件
