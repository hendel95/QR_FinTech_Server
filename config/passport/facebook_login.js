var LocalStrategy = require('passport-facebook').Strategy;


//http://localhost:3000/auth/naver/callback
//페이스북 로그인
module.exports = new LocalStrategy({
    clientID: '195062171111015',
    clientSecret: 'dfb3fb57156b09d79a0fb333ee9171dc',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
}, function (req, email, password, done) {
    if(email === 'a@a' && password === 'a'){
        return done(null, {
            'email': email,
        });
    }else{
        return done(false, null)
    }
});