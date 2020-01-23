require('custom-env').env();

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

console.log("hello world");
// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */



/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */
app.use('/', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});

app.get('/', (req, res) => {
    let indexPath = __dirname + '/views/index.html';
    res.sendFile(indexPath);
});

app.get('/json', (req, res) => {
  let msg = "hello json";
  if(process.env.MESSAGE_STYLE === "uppercase")
    msg = msg.toUpperCase();
  res.json({"message": msg});
});



app.get('/', (req, res) => {
 res.send("Hello express");

});

app.get('/now', (req, res, next) => {
    req['time'] = new Date().toString();
    next();
},(req, res) => {
    res.json({time: req.time});
});

app.get('/:word/echo', (req, res) => {
   res.json({echo: req.params.word});
});

app.use('/name', bodyParser.urlencoded({extended: false}));

app.route('/name')
    .get((req, res) => {
        res.json({name: req.query.firstN + ' ' + req.query.lastN});
    })
    .post((req, res) => {
        res.json({name: req.body.first + ' ' + req.body.last});
    });

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
