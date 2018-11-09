'use strict';
app.factory('DataService', ['$http', '$q', 'FilesService', function ($http, $q, FilesService) {
    var dataFactory = {};
    var result;
    var serviceBase = "http://localhost:1568/";
    var api = "api/";

    // Update personal details service
    dataFactory.UpdatePersonalDetails = function (name, lastName, gender, picurl) {
        var deferred = $q.defer();
        var data = { UserName: name, LastName: lastName, Gender: gender, PicURL: picurl };

        $http.post(serviceBase + api + 'updatedata', data,
              {
                  headers: {
                      'Content-Type': 'application/json; charset=utf-8'
                  }
              }).then(function (response) {
                  result = response.data;
                  deferred.resolve(response);
              }, function (err) {
                  deferred.reject(err);
                  console.log(err);
              });

        return deferred.promise;
    };

    //Upload File to server
    dataFactory.uploadFileToServer = function (file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(serviceBase + uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).then(function (response) {
            console.log("Success on Upload Service: " + response.data);
            FilesService.setFileURL(serviceBase + response.data);
        }, function (err) {
            console.log("Error on Upload Service: " + err.data);
        });
    }

    return dataFactory;
}]);
