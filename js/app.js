(function () {
  "use strict";


  //defining module with the name storeApp, with the dependency ngRoute
  angular.module('storeApp', [
  'ngRoute'
  ])
  .config(function ($routeProvider) {   //configuring routing
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/admin/editproduct/:itemIndex', {   //change to id for $http use.Change in views, too
        templateUrl:'views/admin/editItem.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/admin/listView', {
        templateUrl: 'views/admin/listView.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/admin/addproduct', {
      templateUrl: 'views/admin/addNewItem.html',
      controller: 'MainController as mainCtrl'
      })
      .when('/user/listView', {
        templateUrl: 'views/user/listView.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/user/cart', {
        templateUrl: 'views/user/shoppingCart.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/user/detail/:itemIndex', {
        templateUrl: 'views/user/detailView.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/not-found', {
        templateUrl: 'views/not-found.html'
      })
      .otherwise({
        redirectTo:'/not-found'
      });

  });

}) ();
