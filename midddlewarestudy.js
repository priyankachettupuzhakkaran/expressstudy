var express = require('express');
var app = express();
var PORT = 3000;
  
app.post('/', (req, res) => {
    console.log('post request posted')
  res.send("POST Request Called")
})
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
}); 
/*var express = require('express')
var app = express()
app.use('/user/:id', function (req, res, next) {
    res.send('hello world')
    console.log('Request Type:', req.method)
    next()
  })
  app.post('/', (req, res) => {
    res.send("POST Request Called")
  })
    
  app.listen (3000)
  // Requiring module
/*const express = require('express')
const app = express()

app.use('/',function(req, res, next) {
console.log('hello world')
next()
})

app.use('/user',function(req, res, next) {
console.log('happy holidays')
next()
})

// Server setup
var server = app.listen(8080, function () {
	var port = server.address().port
	console.log("Listening at", port)
})*/
