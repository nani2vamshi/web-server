var express = require('express');
var app = express();
var PORT = 3000;
// app.get('/', function(request,response){
// response.send('Hello express');
// });



// takes two parameters
//one route
//2 a function-- with two parameters --> request; response

/* 888*********Challenge************
// /about 
//send the text about us

*****************/
app.get('/about', function(request,response)
{
	response.send('About us');
})

/***********INDEX*************
Now we need to use th e entire public folder. To do this, 
we need to tell the server to use that folder 

When you delete the app.get('/')... index .html will be printed when we open
localhost:3000

******************************/
//console.log(__dirname); -- to know the present server
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function(){
	console.log("server started "+ PORT);
});
//asking the app to listen on port 3000
// we can add second argumetn,a function to print log
// here the challenge is to create a port varibale to use 
//for port and for log