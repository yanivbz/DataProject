// Create NodeJS Server
var express = require('express');
var app = express();
var port = process.env.port || 1568;
// Enable directory browsing - to display image files
app.use('/uploads', express.static(__dirname + '/uploads'));

// Enable Cors 
const cors = require('cors');
app.use(cors());
app.options('*', cors());

// Handle POST requests
var bodyParser = require('body-parser');  
app.use(bodyParser.urlencoded({ extended: true }));  
// create json parser  
app.use(bodyParser.json());  

// run the server
app.listen(port, function () {  
    var datetime = new Date();  
    var message = "The Server is runnning. Server Started at : " + datetime; 
    console.log(message);
});  

// Send Data To DB Controller
var dataController = require('./Controller/DataController');
app.use("/api/updatedata", dataController);

// Upload File Controller
var uploadImageController = require('./Controller/UploadImageController');
app.use("/api/imageupload", uploadImageController);




