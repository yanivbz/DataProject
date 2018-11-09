
var express = require('express');
var router = express.Router();
var multer  = require('multer');

var storage = multer.diskStorage({
    destination:  './uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  var upload = multer({ storage: storage });

  router.route('/')  
  .post(upload.single('file'), function(req, res){
      console.log('Upload Successfuly : ', req.file, req.body);
      res.send(req.file.path);
  });

module.exports = router;