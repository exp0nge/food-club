var app = angular.module('FoodClubApp', ['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
        .when('/view/:id', {
            templateUrl: 'views/email.html',
            controller: 'EmailController'
        });
});