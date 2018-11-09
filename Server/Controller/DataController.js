
var express = require('express');
var router = express.Router();
var sql = require('mssql');
var conn = require('../Connection/dbconnection')();

// Update DB with store procedure
router.route('/')  
.post(function (req, res) {  
    conn.connect().then(function () {  
        var transaction = new sql.Transaction(conn);  
        transaction.begin().then(function () {  
            var request = new sql.Request(transaction);
            //Add Params to Store Procedure  
            request.input("UserName", sql.NVarChar(50), req.body.UserName)  
            request.input("LastName", sql.NVarChar(50), req.body.LastName)  
            request.input("Gender", sql.NVarChar(50), req.body.Gender)
            request.input("PicURL", sql.NVarChar(250), req.body.PicURL)
            // Excecute Store Procedure
            request.execute("UpdatePersonalDetials").then(function () {  
                transaction.commit().then(function (recordSet) {  
                    conn.close();  
                    res.status(200).send("Data Updated Successfully");  
                }).catch(function (err) {  
                    conn.close();  
                    res.status(400).send("Error Occured on data update: " + err);  
                });  
            }).catch(function (err) {  
                conn.close();  
                res.status(400).send("SP Execute Error: " + err);  
            });  
        }).catch(function (err) {  
            conn.close();  
            res.status(400).send("Transaction Error: " + err);  
        });  
    }).catch(function (err) {  
        conn.close();  
        res.status(400).send("Connection Error: " + err);  
    });  
});  

module.exports = router;