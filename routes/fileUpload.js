var multer = require('multer'); //파일 업로드 모듈
var express = require('express');
var router = express.Router();

var margin = 100;
var maxFileSize = 3 * 1024 * 1024 + margin;

var fs = require('fs');

var userQuerys = require('../database/userQuerys');



router.post('/profile', function(req,res){

    var upload = multer({ dest: './public/uploads/', limits: {fileSize:maxFileSize}}).single('myfile');
		upload(req,res,function(err)
		{
            if(err == undefined) //정상
            {
                console.log(req.body); //form fields
                console.log(req.file); //form files
                if(req.file == undefined)
                {
                    //console.log('파일첨부 안함');
                    req.file = '';
                    req.file.filename = '';
                    userQuerys.insertUser(req,res);
                }
                else
                {
                    userQuerys.insertUser(req,res);
                    /*
                    fs.rename('./upload_files/profiles/'+req.file.filename,'./upload_files/profiles/'+req.body.email,function(err) //프로필 사진 파일 이름 == 이메일 아이디
                        {
                            if(err)
                                console.log(err);
                            else
                            {

                            }
                        }
                    );
                    */
                }

                //res.status(204).end();


            }
            else if( err.code == "LIMIT_FILE_SIZE")
            {
                res.render('process/sign_up.ejs', {message : '파일 크기 초과 - 프로필 사진 파일은 3MB 이하만 가능합니다'});
            }

		});

});

module.exports = router;
