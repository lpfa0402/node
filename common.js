/*
 * @Author: Lpf
 * @Date: 2021-04-06 15:21:31
 * @LastEditTime: 2021-04-06 15:25:40
 * @Description: 封装读取目录模块，配合读写操作
 */
let fs = require('fs');

// 读取文件的操作
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
};

// 写入文件内容操作
function fsWriteFile(path, content) {
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
};

module.exports = { fsRead, fsWriteFile}