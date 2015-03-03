//controller: business logic behind views.  Exposes variables and functionality to expressions and directives.

(function () {
  "use strict";

  angular.module('storeApp')
    .controller('MainController', function (StoreService, $scope, $routeParams, $location) {   //inject service here
                                                                  //$location makes url available to app, allows changes to url
                                                                  //get current path: $location.path(); change path: $location.path('/newValue')
      var mainCtrl = this;  //alias for MainController
      // StoreService.getItems().success(function(data) {
      //   main.items = data;
      // });


      mainCtrl.items = StoreService.getItems(); //getting data from product array in service

      mainCtrl.singleItem = StoreService.getItem($routeParams.itemIndex);

  // shopping cart

      mainCtrl.cartProducts = StoreService.getCartItems();

      mainCtrl.singleCartItem = StoreService.getCartItem($routeParams.itemIndex);

      mainCtrl.addToCart = function(item) {
        StoreService.addToCart(item);
        $location.path('/user/cart');
      };

      mainCtrl.deleteFromCart = function(item) {
        StoreService.deleteFromCart(item);
      };
// not sure if I need update for cart

      mainCtrl.total = function() {
        var total = 0;
        angular.forEach(mainCtrl.cartProducts, function(item) {
          total += item.quant * item.price;
        })
        return total;
      };



  // add product
      mainCtrl.addProduct = function (newItem) { //using this method in form in addNewItem.html
        StoreService.addItem(newItem); //see service's public API method
        $scope.newItem = {};  //to clear out form
        $location.path('/admin/listView'); //to go back to listView

      };

  // delete product
      mainCtrl.deleteProduct = function (item) {
        StoreService.deleteItem(item);
      };

  // edit product
        mainCtrl.editProduct = function (item) {
          StoreService.editItem(item, $routeParams.itemIndex);
          $location.path('/admin/listView');
        };

        // $scope.$on('item:deleted', function() {
        //   // StoreService.getItems().success (function(data)) {
        //
        // }
        }) ;


    });

}) ();
