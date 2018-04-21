var LocalStrategy = require('passport-naver').Strategy;


//http://localhost:3000
//네이버 로그인
module.exports = new LocalStrategy({
    clientID: 'K3m5tQ3mrBnLtanAVmna',
    clientSecret: 'ks_KF4U78j',
    callbackURL: '/auth/naver/callback',
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