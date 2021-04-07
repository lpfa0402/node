/*
 * @Author: Lpf
 * @Date: 2021-04-07 16:28:36
 * @LastEditTime: 2021-04-07 16:50:36
 * @Description: 测试读取事件
 */

let fs = require('fs');

// 封装事件处理复杂操作
let Levent = {
    // 创建一个事件对象，存入相对应的事件
    event: {
        // fileSuccess: [fn, fn, fn]
    },
    on:function(eventName, eventFn) {
        // 如果上面的事件对象event内存在事件， 就将对应的事件push进事件对象内
        if(this.event[eventName]) {
            this.event[eventName].push(eventFn);
        } else {
        //如果上面的事件对象event内不存在事件，就创建一个新的事件
            this.event[eventName] = [eventFn];
        }
    },
    // 事件触发，将event内存在的函数拿出来一次调用
    emit:function(eventName, eventMsg) {
        // 如果事件存在，进行调用
        if(this.event[eventName]){
            this.event[eventName].forEach(itemFn => {
                itemFn(eventMsg);
            });
        }
    }
};

Levent.on('fileSuccess', function(eventMsg) {
    console.log('触发事件AA')
})
Levent.on('fileSuccess', function(eventMsg) {
    console.log('触发事件B')
})
Levent.on('fileSuccess', function(eventMsg) {
    console.log('触发事件CC')
})

fs.readFile('test.txt', {flags: 'w', encoding: 'utf-8'}, function(err,data) {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
        Levent.emit('fileSuccess', data);
    }
})