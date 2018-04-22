var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var fileUpload = require('./routes/fileUpload');
var idCheck = require('./routes/id_check');
var loginRouter = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

var passport = require('passport');

app.use(passport.initialize());
app.use(passport.session()); //로그인 세션 유지

var configPassport = require('./config/passport');
configPassport(app,passport);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/upload',fileUpload);
app.use('/', indexRouter);
app.use('/upload', fileUpload);
app.use('/id_check', idCheck);

app.use('/login', loginRouter);

app.use('/auth/facebook', passport.authenticate('facebook-login',{scope:'email'}));
app.use('/auth/naver', passport.authenticate('naver-login',{scope:'email'}));

app.use('/about', function(req, res, next) {
    res.render('about');
});
app.use('/products', function(req, res, next) {
    res.render('products');
});
app.use('/store', function(req, res, next) {
    res.render('store');
});

app.use('/user',isLoggedIn, function(req, res, next) {
    res.render('dashboard/user', {req:req} );
});

app.use('/sign_up', function(req, res, next) {
    res.render('process/sign_up.ejs', {message : ''});
});

app.use('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function isLoggedIn(req,res,next)
{
    console.log('isloggedin 호출됨');
    if(req.isAuthenticated())
    {
        return next();
    }
    res.redirect('/');
}

module.exports = app;
