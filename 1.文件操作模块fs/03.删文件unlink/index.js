/*
 * @Author: Lpf
 * @Date: 2021-03-15 14:53:12
 * @LastEditTime: 2021-03-15 14:56:54
 * @Description:  删除操作，一旦删除之后对磁盘进行了改写操作，不可恢复
 */
/**
 * @description: fs.unlink(path, callback) 
 * @param {*}
 * @return {*}
 */
let fs = require('fs');
fs.unlink('test.txt', function() {
    console.log('删除成功')
}) 