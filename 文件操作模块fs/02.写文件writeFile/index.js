/*
 * @Author: Lpf
 * @Date: 2021-02-24 17:30:43
 * @LastEditTime: 2021-02-24 17:58:53
 * @Description: 
 */

 let fs = require('fs');

 /**
  * @description: fs.writeFile(file, data[, options], callback) 写入文件
  * @param {
  *     file: 文件名
  *     data：写入的数据
  *     options：{
  *         encoding：编码格式，默认值 utf8
  *         mode: 默认值0o666
  *         flag: 字符串标志, 默认值w
  *             w: 写入，
  *             a: 追加
  *     }
  *     callback: {
  *         err ： 错误
  *     }
  * }
  * @return {*}
  */ 
//  fs.writeFile('test.txt', '写入的数据', {flag: 'w', encoding: 'utf-8'}, (err) => {
//     if(err) {
//         console.log('错误', err)
//     } else {
//         console.log('写入成功')
//     }
//  })

//  封装方法
function writeFilePro(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, {flag: 'a', encoding: 'utf-8'}, (err) => {
            if(err) {
                // 写入失败
                reject(err)
            } else {
                resolve('写入成功')
            }
         })
    })
}
var write = writeFilePro('test.txt', '写入的数据\n');
write.then((res) => {
    console.log(res)
})
async function writeList() {
    await writeFilePro('test2.txt', '封装写入的内容\n');
    await writeFilePro('test2.txt', '6666\n');
}
writeList()