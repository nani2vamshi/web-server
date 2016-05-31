var middleware = {
	requireAuthentication : function(req,res,next){
		console.log("Private route taken");
		next();
	},
	logger : function(req,res,next){
		//Challenge
		var date= new Date().toString();
		console.log(req.method+ " " +date+" "+req.originalUrl);
		next();
	}
};
module.exports = middleware;