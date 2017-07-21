/**
 * Created by harrishuang on 2017/7/19.
 */

/**
 * exprot 对外输出接口
 * @type {string}
 */


var firstName = 'Michael';
var lastName = 'Jackscdd___on';
var year = 1958;
export {firstName, lastName, year};

export var first_Name = "晨曦";
export var last_name = "嘉宝";
export var age = 123;



var m = 1;
// export m;这是错误写法；export 只能数据接口；不能输出
export {m};//对外数据的接口
// 因为没有提供对外的接口。第一种写法直接输出1，第二种写法通过变量m，还是直接输出1。1只是一个值，不是接口。正确的写法是下面这样。


export function user() {
    return "123123";
}




export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);


