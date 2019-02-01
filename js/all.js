var app = angular.module("myApp",['ui.router']);
app.config(function($stateProvider){
    var signIn = {
        name: 'signin',
        url: '/signin',
        templateUrl: './signin.html',
        controller: 'signInCtrl'
    }
    var signUp = {
        name: 'signup',
        url: '/signup',
        templateUrl: './signup.html',
        controller: 'signUpCtrl'
    }

    $stateProvider.state(signIn);
    $stateProvider.state(signUp);
})