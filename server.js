var express = require('express');
var path = require('path')
var app = express();
app.use(express.static(__dirname + '/dist'));
app.get('/*', (req,res) => {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
 console.log('listening to Port', app.get('port'));
});
//ng build and push to git the latest changes before pushing to heroku