'use strict';

/**
 * @ngdoc overview
 * @name flowsimUiApp
 * @description
 * # flowsimUiApp
 *
 * Main module of the application.
 */
angular
  .module('flowsimUiApp', [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap',
    'hc.marked'
  ])
  .config(function ($routeProvider, $tooltipProvider, markedProvider) {
    $tooltipProvider.options({
      popupDelay: 800
    });
    markedProvider.setOptions({gfm: true});
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/subscriber/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/subscriber/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/subscriber/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/subscriber/reset/:token', {
        templateUrl: 'views/reset.html',
        controller: 'ResetCtrl'
      })
      .when('/subscriber/verify/:token', {
        templateUrl: 'views/verify.html',
        controller: 'VerifyCtrl'
      })
      .when('/subscriber/update', {
        templateUrl: 'views/update.html',
        controller: 'UpdateCtrl'
      })
      .when('/subscriber/forgot', {
        templateUrl: 'views/forgot.html',
        controller: 'ForgotCtrl'
      })
      .when('/packet', {
        templateUrl: 'views/packet.html',
        controller: 'PacketCtrl'
      })
      .when('/switch/match', {
        templateUrl: 'views/match.html',
        controller: 'MatchCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/switch', {
        templateUrl: 'views/switch.html',
        controller: 'SwitchCtrl'
      })
      .when('/simulation', {
        templateUrl: 'views/simulation.html',
        controller: 'SimulationCtrl'
      }) 
      .when('/documentation', {
        templateUrl: 'views/documentation.html',
        controller: 'DocumentationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
