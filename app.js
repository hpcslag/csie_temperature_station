const koa = require('koa');
const router = require('koa-router')();
const serve = require('koa-static');
const send = require('koa-send');
const app = koa();

app.use(serve('www'));

app.use(router.routes()).use(router.allowedMethods());

var temp = 0;
var humi = 1;

router.get('/api/now', function *(){
	let json = {
		temp : temp,
		humi : humi
	} 
	this.body = JSON.stringify(json);
});

router.get('/api/day', function *(){
  let json = {
		temp : [1,2,3,4,5,6,7,8,9,0],
		humi : [1,2,3,4,5,6,7,8,9,0]
	} 
	this.body = JSON.stringify(json);
});

router.get('/api/week', function *(){
  let json = {
		temp : [1,2,3,4,5,6,7,8,9,0],
		humi : [1,2,3,4,5,6,7,8,9,0]
	} 
	this.body = JSON.stringify(json);
});

//important: this code need write back to last app.use
app.listen(80,function(){
	console.log("Server is running at localhost:80");
});