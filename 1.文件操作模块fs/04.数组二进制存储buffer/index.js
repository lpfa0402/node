/*
 * @Author: Lpf
 * @Date: 2021-03-15 14:58:05
 * @LastEditTime: 2021-03-15 15:49:29
 * @Description: buffer 对数组进行二进制存储，效率高
 *  解决的问题：
 *      1.数组不能进行二进制数据的操作
 *      2.js数组不像其它语言存储效率高
 *      3.buffer会在内存空间开辟出固定大小的内存，将数据放在一起以二级制数据的形式存放在缓存区
 */
var str = 'helloworld';
let buf =  Buffer.from(str);
console.log(buf);

// 输出buff内容
console.log(buf.toString());

// alloc开辟一个   空   的缓存区（安全，会清空掉之前的数据，效率较低）,如果存入的内容超出缓存区大小，会被截取
let buf1 = Buffer.alloc(10);
buf1[0] = 256;
console.log(buf1, 'buf1-------')

// allocUnsafe 效率高，不安全，但是会接收到历史遗留的数据
let buf2 = Buffer.allocUnsafe(10)
console.log(buf2);