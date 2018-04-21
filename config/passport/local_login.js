var LocalStrategy = require('passport-local').Strategy;

//일반 로그인

module.exports = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true //인증을 수행하는 인증 함수로 HTTP request를 그대로  전달할지 여부를 결정한다
}, function (req, email, password, done) {
    if(email === 'a@a' && password === 'a'){
        return done(null, {
            'email': email,
        });
    }else{
        return done(false, null)
    }
});