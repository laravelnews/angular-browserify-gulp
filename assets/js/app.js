require('angular');
var router = require('angular-ui-router');

var app = angular.module('app', [router]);

app.config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to home /
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: 'views/home.html',
            controller: require('./controllers/home')
        })
        .state('posts', {
            url: "/posts",
            templateUrl: "views/posts.html",
            controller: require('./controllers/posts')
        });
});