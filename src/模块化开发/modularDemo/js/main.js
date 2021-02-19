console.log("加载成功");

/*
    引入模块 遵从AMD规范
    第一个参数，必须是数组
*/
require(["demo/add"], function(addObj){
    var res = addObj.outAdd(10, 20);
    alert(res);
    var sum = addObj.outShow();
    addObj.outShow();
})

/*
    我们可以配置路径，你就没必要再引入模块的时候再写路径
*/
