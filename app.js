require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session  = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const flash    = require('connect-flash');


const publicFolder = path.join(__dirname, 'public');
const node_modules = path.join(__dirname, 'node_modules');

require('./passport/passport')(passport); 

const app = express();
app.set('port', process.env.PORT || 3014);
app.set('views', __dirname + '/views');
app.set('view_engine', 'ejs');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
 } )); 
 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 




app.use(express.static(publicFolder));

app.use(express.static(node_modules));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./routes/routes');



app.use(routes);

if (process.env.NODE_ENV == "DEV") {
  const reload = require('reload');

  reload(app).then(function (reloadReturned) {
    var server = app.listen(app.get('port'), function(){
      console.info('Express node_env: ' + process.env.NODE_ENV  + " Port: "+server.address().port);
    })
  }).catch((err) => { console.error('Reload could not start', err) });
}else{
  var server = app.listen(app.get('port'), function(){
    console.info('Express node_env: ' + process.env.NODE_ENV  + " Port: "+server.address().port);
  });
}


















