var express = require('express');
var app = express();
var fs = require('fs')

app.use(express.static(__dirname + '/public'));

app.get('/ajaxcall', function(req, res) {
	/*var data = {
		contactId: 1,
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@domain.com',
		phone: '987654'
	};
*/
    var data = fs.readFileSync('users.txt');
    
    //console.log("Synchronous read: " + data);
  //res.send(JSON.stringify(data));
    //res.json(data);
    res.send(data);
});

app.listen(8000);