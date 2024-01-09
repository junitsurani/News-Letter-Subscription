// const express=require("express");
// const bodyParser=require("body-parser");
// const app=express();
// app.use(bodyParser.urlencoded({extended: true}));

// app.get("/",function(req,res){
// res.sendFile(__dirname+"/result.html");
// })
// app.post("/",function(req,res){
//     var num1=Number(req.body.n1);
//     var num2=Number(req.body.n2);
//     var sum=num1+num2;
//     res.send("result is"+ sum);
// // res.send("thanks") ;
// });
// app.listen(3000,function(){
// console.log("server has started");
// });

// var http=require("http");
// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type': 'text/plain'});
//     res.end("hello world");
// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/');

// // callback concept nodejs
// var fs=require("fs");
// var d=fs.readFileSync('in.txt')
// console.log(d.toString());
// console.log("end");

// eventloop
