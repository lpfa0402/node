/*
 * @Author: Lpf
 * @Date: 2021-04-06 16:58:43
 * @LastEditTime: 2021-04-06 17:37:37
 * @Description: 输入输出模块
 */
// 导入readline包
let readline = require('readline');
// 导入读写的包
let {fsWriteFile} = require('../common')

// 实例化接口对象
var r1 = readline.createInterface({
    output: process.stdout, //输出
    input: process.stdin, //输入
})

// 设置提问事件
// r1.question('这是提问的内容：', function(answer){
//     // 执行后，在命令行直接输入内容后回车，可以看到到付的内容
//     console.log('答复的内容:', answer);
//     r1.close();
// })


// 封装
function lcQuestion(title) {
    return new Promise(function(resolve, reject){
        r1.question(title, function(answer) {
            resolve(answer);
        })
    })
};

// 创建异步的创建函数
async function createPackage() {
    let name = await lcQuestion('name:');
    let discription = await lcQuestion('discription:');
    let main = await lcQuestion('main:');
    let author = await lcQuestion('author:');

    let content = `{
        "name": "${name}",
        "discription": "${discription}",
        "main": "${main}",
        "author": "${author}",
    }`
    // 将内容写入
    await fsWriteFile('package.json', content);
    r1.close();
};

createPackage();
// 结束事件
r1.on('close', function() {
    process.exit(0); // 0表示直接退出没有其它的操作
})