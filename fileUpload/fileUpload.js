var multer = require('multer'); //파일 업로드 모듈
var express = require('express');
var router = express.Router();

var maxFileSize = 10 * 1024 * 1024;

var upload = multer({ dest: '/upload_files/', limits: { fileSize: maxFileSize} }).array('userPhoto', 1);
router.post('/', multer({ dest: '/tmp/upload/'}).single('myfile'), function(req,res){
    	console.log(req.body); //form fields
    	console.log(req.file); //form files
    	res.status(204).end();
});


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
