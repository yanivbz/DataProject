app.factory('FilesService', ['$http', '$q', function ($http, $q,) {
    var file = {}

    //get and set uploaded filename
    return {
        setFileURL: function (fileUrl) {
            file.fileUrl = fileUrl;
        },
        getFileURL: function () {
            return file.fileUrl;
        }
    }
}]);