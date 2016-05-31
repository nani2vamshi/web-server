var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js')
//create a new object


app.use(middleware.logger);

//app.use(middleware.requireAuthentication);
//order is important... require authentication comes first... we can fo this for specific pages like below
app.get('/about',middleware.requireAuthentication, function(request,response)
{
	response.send('About us');
})

app.use(express.static(__dirname + '/public'));
app.listen(PORT, function(){
	console.log("server started "+ PORT + "!");
});
