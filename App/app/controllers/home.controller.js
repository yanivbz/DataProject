'use strict';
app.controller('HomeCtrl', ['$scope', 'DataService', '$http', 'FilesService', '$timeout', function ($scope, DataService, $http, FilesService, $timeout
    ) {
    var self = this;
    self.showError = false;
    self.showSuccess = false;
    self.genders = ['Male', 'Female', 'Other'];
    self.isUploadFileButton = true;

    self.sendData = function (firstName, lastName, gender, picUrl) {
        DataService.UpdatePersonalDetails(firstName, lastName, gender, picUrl).then(function (response) {
            console.log("Success: " + response.data);
            self.showError = false;
            self.showSuccess = true;
        }, function (err) {
            self.showError = true;
            console.error("Error : " + err);
            self.showSuccess = false;
        });
    }

    self.uploadFile = function () {
        var file = $scope.fileToUpload;
        var uploadUrl = "api/imageupload";
        DataService.uploadFileToServer(file, uploadUrl);

        $timeout(function () {
            setImageURL();
        }, 500);
    };

    $scope.fileChanged = function () {
        self.isUploadFileButton = false;
    }

    function setImageURL() {
        var image = FilesService.getFileURL();
        self.imageUrl = image;
    };
}]);