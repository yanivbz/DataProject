// Create Angulajs APp Module
var app = angular.module("BelongAPP", ['ngRoute', 'ngMaterial', 'ngMessages']);

// Create Page Routing - for SPA
app.config(function ($routeProvider) {

    //homepage
    $routeProvider
    .when('/', {
        templateUrl: 'app/Views/home.html',
        controller: 'HomeCtrl as vm'
    });

});
