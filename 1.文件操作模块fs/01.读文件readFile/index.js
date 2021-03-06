/*
 * @Author: Lpf
 * @Date: 2021-02-24 16:11:24
 * @LastEditTime: 2021-02-24 17:27:37
 * @Description: 通过fs模块，进行文件内容读取
 */
/**
 * @description: options 使用方法
 * @param {
 *  node api内 被[] 包裹的参数 都是非必传
 *  如果使用的话 采用对象的方式
 *  例
 *  {flag: 'r', encoding: 'utf-8'}
 * }
 * @return {*}
 */
// 导入文件模块
var fs = require('fs');

/**
 * @description: fs.openSync(path, flags, mode)  同步读取文件
 * @param {
 *  path：文件路径
 * 
 *  flags: 对文件进行的操作， 常用如下
 *      a: 打开文件追加， 文件不存在则创建该文件
 *      r: 打开文件用于读取， 如果文件不存在，则出现异常
 *      w: 打开文件写入， 不存在则创建， 文件存在则截断文件
 * 
 *  mode: 用于读取数据时的模式设置， 默认值0o666, 一般不需要设置
 * }
 * @return {返回的是文件的标识}
 */

var fd = fs.openSync('test.txt', "r");

/**
 * @description: fs.readFileSync(file, [options])  同步对指定文件进行操作
 * @param {
 *     file: 文件的路径
 *     options: {
 *      flag： 对文件进行的操作
 *      encoding: 编码格式，需要与被操作的问价你编码格式一致 
 *  }
 * }
 * @return {返回缓冲区的数据}
 */ 

var content = fs.readFileSync('test.txt', {flag: 'r', encoding: 'utf-8'});
// console.log(content, '同步读取')

/**
 * @description: fs.readFile(file, [options], callback)  异步读取文件 
 * @param {
 *  callback：回调函数
 * }
 * @return {*}
 */

// fs.readFile('test.txt', {flag: 'r', encoding: 'utf-8'}, (err, data) => {
//      if(err) {
//          console.log(err)
//      } else {
//          console.log(data, '异步读取')
//      }
//  });
//  console.log('比异步操作先执行')

//  封装成promise对象, 避免回调地狱
function fsRead(path) {
    return new Promise ((resolve, reject) => {
        fs.readFile(path, {flag: 'r', encoding: 'utf-8'}, (err, data) => {
            if(err) {
                //失败内容
                reject(err)
            } else {
                // 成功返回
                resolve(data)
            }
        });
    })
}
var file = fsRead('test.txt')
file.then((res) => {
    console.log(res)
})

// 使用async 读取封装的内容

async function ReadList() {
    var path = await fsRead('test.txt')
    var content = await fsRead(path.trim()) // trim() 去除字符串两端的空格
    console.log(content, 'async读取的内容')
}
ReadList()