/*
 * @Author: Lpf
 * @Date: 2021-04-07 16:53:07
 * @LastEditTime: 2021-04-07 17:12:21
 * @Description: 调用事件
 */
// 事件模块
let events = require('events');
let fs= require('fs');
// 初始化事件对象
let emitEvent = new events.EventEmitter();

// 使用事件对象监听
emitEvent.on('helloSuccess', function(eventMsg) {
    console.log('监听的事件AAA')
    console.log(eventMsg, '----------读取的内容')
});
emitEvent.on('helloSuccess', function() {
    console.log('监听的事件BBB8')
});

// 触发事件
// fs.readFile('test.txt', {encoding: 'utf-8'}, function(err, data){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         emitEvent.emit('helloSuccess', data);
//     }
// })

// 封装
function LreadFile(path) {
    return new Promise ((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8'}, function(err, data){
            if(err) {
                reject(data);
            } else {
                resolve(data);
                // emitEvent.emit('helloSuccess', data);
            }
        })
    })
}

LreadFile('test.txt').then(function(data) {
    emitEvent.emit('helloSuccess', data);
});

async function test(){
    let data = await LreadFile('test.txt');
    emitEvent.emit('helloSuccess', data);
};
test();