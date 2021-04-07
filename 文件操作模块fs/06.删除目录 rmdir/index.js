/*
 * @Author: Lpf
 * @Date: 2021-04-06 15:46:42
 * @LastEditTime: 2021-04-06 15:54:54
 * @Description: 删除目录 fs.rmdir(path, callback(err))
 */
let fs = require('fs');
fs.rmdir('a', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('删除成功');
    }
})