(function() {
  'use strict';

  angular
    .module('alice')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('first', {
        url: '/1',
        templateUrl: 'app/first/first.html',
        controller: 'FirstController',
        controllerAs: 'first'
      })
      .state('second', {
        url: '/2',
        templateUrl: 'app/second/second.html',
        controller: 'SecondController',
        controllerAs: 'second'
      })
      .state('third', {
        url: '/3',
        templateUrl: 'app/third/third.html',
        controller: 'ThirdController',
        controllerAs: 'third'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
