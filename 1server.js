var express = require('express');
var app = express();

app.get('/', function(request,response){
response.send('Hello express');
});



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

app.listen(3000);
//asking the app to listen on port 3000
