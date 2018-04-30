var LocalStrategy = require('passport-local').Strategy;

//일반 로그인

var DBManager = require('../../database/DBManager');
var connection = DBManager.getConnection();

var sha256 = require('sha256');

module.exports = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true //인증을 수행하는 인증 함수로 HTTP request를 그대로  전달할지 여부를 결정한다
}, function (req, email, password, done) {
    var sql = 'SELECT COUNT(*) FROM user WHERE id=? AND PW=?';
    connection.query(sql, [req.body.email, sha256(req.body.password)], function (err, rows) {
        if (!err) {
            if(rows[0]['COUNT(*)'] == 0)
            {
                console.log('로그인 실패');
                return done(false, null);

            }
            else
            {
                console.log('로그인 성공');
                return done(null, {
                    'email': email,
                });
            }
        }
        else {

        }
        console.log('로그인 실패;;');
    });
});
