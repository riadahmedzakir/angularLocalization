var app = angular.module('testApp', ['ngRoute', 'pascalprecht.translate']);

app.controller('mainController', function ($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
})

app.config(function ($routeProvider, $translateProvider) {
    var language = (localStorage.getItem('preferedLanguage')) ? localStorage.getItem('preferedLanguage') : "en-US";
    $translateProvider
        .useStaticFilesLoader({
            prefix: 'i18n/lang-',
            suffix: '.json'
        })
        .useSanitizeValueStrategy('sanitizeParameters')
        .preferredLanguage(language);


    $routeProvider
        .when('/', {
            templateUrl: 'app/localization-test/localization-test.view.html',
            controller: 'localizationTestController',
            controllerAs: "vm"
        })
        .otherwise({
            templateUrl: '404.html',
        })
});

app.run(function () {

})