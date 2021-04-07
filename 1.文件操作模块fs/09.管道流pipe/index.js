/*
 * @Author: Lpf
 * @Date: 2021-04-07 16:01:10
 * @LastEditTime: 2021-04-07 16:04:19
 * @Description: 通过管道流进行读取后写入的操作
 */

let fs = require('fs');

/**
 * @description: 创建读取流
 * @param {*} fs.createReadStream(路径， [可选配置项])
 * @return {*}
 */
// 读取流
let rs = fs.createReadStream('test.txt', {flags: 'r', encoding: 'utf-8'})

// 写入流
let ws = fs.createWriteStream('helloB.txt',{flags: 'w', encoding: 'utf-8'});

rs.on('open', function() {
    console.log('文件被打开')
})

rs.on('close', function() {
    console.log('结束读取流事件')
})

/**
 * @description: pipe 进行写入流操作
 * @param {*}
 * @return {*}
 */
rs.pipe(ws);