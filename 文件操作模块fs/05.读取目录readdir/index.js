/*
 * @Author: Lpf
 * @Date: 2021-04-06 15:11:31
 * @LastEditTime: 2021-04-06 17:32:22
 * @Description: fs.readdir(path, callback(err, filers)) 
 *      读取目录
 */
let fs = require('fs');
let {fsRead, fsWriteFile} = require('../../common');
/**
 * @description: 
 * @param {*} err : 报错信息
 * @param {*} filers：被读取文件夹下的文件目录
 * @return {*}
 */

const textPath = 'all.txt'
fs.readdir('../01.读文件readFile', function(err, filers) {
    if(err) {
        console.log(err, ';err----------')
    } else {
        // 循环获取到的文件目录
        filers.forEach(async function(filename, i) {
            // 根据目录读取内容
            let content = await fsRead('../01.读文件readFile/' + filename);
            // 将读取到的内容写入到指定文件内
            await fsWriteFile(textPath, content);
        })
    }
})