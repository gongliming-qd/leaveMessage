var fs = require('fs');
var express = require('express');
var router = express.Router();
var allmethod = require('../business/index');
var path = require('path');

// 展现所有的列表
router.get('/',function(req,res){
   // D:/node/express/personInfo/data.json
    fs.readFile(__dirname + '/../data.json',function(err,data){
        if(!err){
            console.log(data.toString());
        }
        else{
            console.log(err);
            
        }

    })
   
    
    res.render('index.art',{lists : [{name : 'glm',age : 18, phone : '11111'}]});
})







exports.router = router;