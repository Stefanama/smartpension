'use strict';

/**
 * @ngdoc overview
 * @name smartpensionApp
 * @description
 * # smartpensionApp
 *
 * Main module of the application.
 */
angular
  .module('smartpensionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularValidator'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).directive('dropdownSimple', function ($timeout) {
    return {
        restrict: "A"
        , link: function (scope, elm, attr) {
            $timeout(function () {
                $(elm).dropdown().dropdown('setting', {
                    action: attr.action || 'activate'
                     , onChange: function (value) {
                        scope.$parent[attr.ngModel] = value;
                        scope.$parent.$apply();
                    }
                });
            }, 0);

           
        }
    };
});
