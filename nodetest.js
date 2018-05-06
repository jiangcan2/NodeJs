var http = require('http');
var otherFun = require("./node/nodetest1.js");
//var User = require("./user/User");
var Teacher = require("./user/Teacher");
http.createServer( (request, response)=> {
	response.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8'});
	if(request.url!== "/favicon.ico"){
		//fun1(response);
		//otherFun.fun3(response);
		//otherFun['fun2'](response);
		//user = new User(1,"张三",20);
		//user.enter();
		teacher = new Teacher(1,"张三",20);
		teacher.enter();
		teacher.soso(response);
		response.end();
	}
}).listen(8080);

console.log("server running at http://127.0.0.1:8080/");

function fun1(res){
	console.log("fun1");
	res.write("hello,我是fun1");
}