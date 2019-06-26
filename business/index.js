var fs = require('fs');

//读取json文件

function readdata(fn){
    fs.readFile('../data.json',function(err,data){
        if(!err){
            var nowdata = JSON.parse(data.toString())
            fn(nowdata);
        }
    })
}

// 设置json文件

function writedata(data,fn){

    fs.writeFile('../data.json',JSON.stringify(data),function(err){
        if(err){
            fn(err)
        }
    })
}

// 获取所有的信息

exports.getdata = readdata;
exports.data = 'nihao';

