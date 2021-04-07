/*
 * @Author: Lpf
 * @Date: 2021-04-07 14:58:50
 * @LastEditTime: 2021-04-07 15:59:06
 * @Description: createReadStream：可读流
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
let ws = fs.createWriteStream('hello.txt',{flags: 'w', encoding: 'utf-8'});


rs.on('open', function() {
    console.log('文件被打开')
})

// 监听每一批数据流入完成，文件大的时候会自动分批
rs.on('data', function(chunk) {
    console.log(chunk, '读取的数据')
    // 将读取的输入写入hello.txt
    ws.write(chunk, () => {
        console.log('单批数据流入完毕')
    });
})

rs.on('close', function() {
    console.log('结束读取流事件')
    // 读取结束后结束写入操作
    ws.end(()=> {
        console.log('数据写入完毕')
    });
})
