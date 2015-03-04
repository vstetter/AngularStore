//controller: business logic behind views.  Exposes variables and functionality to expressions and directives.

(function () {
  "use strict";

// store controller (user)

  angular.module('storeApp')
    .controller('MainController', function (StoreService, $rootScope, $scope, $routeParams, $location) {   //inject service here
                                                                  //$location makes url available to app, allows changes to url
                                                                  //get current path: $location.path(); change path: $location.path('/newValue')
      var mainCtrl = this;  //alias for MainController

      StoreService.getItems().success(function(data) {
        mainCtrl.items = data;
      });

      StoreService.getItem($routeParams.itemIndex).success(function(data) {
        mainCtrl.singleItem = data;
            // or item?
      });

      mainCtrl.currentIndex = $routeParams.itemIndex;


  // shopping cart


        mainCtrl.cart = StoreService.getCartItems();
        mainCtrl.total = StoreService.total();
        // cart.total = 0; // or cartCtrl.total=0??

        // mainCtrl.singleCartItem = StoreService.getCartItem($routeParams.itemIndex);

        mainCtrl.addToCart = function(item) {
          StoreService.addToCart(item);
          $location.path('/user/cart');
        };

        mainCtrl.deleteFromCart = function(item) {
          StoreService.deleteFromCart(item);
        };
        // not sure if I need update for cart

        // C: cart.updateTotal = function () {
        // cart.total = CartService.calculateTotal();
        //return cart.total;
        //};

        // mainCtrl.total = function() {
        //   // add from service
        // };

        mainCtrl.addReview = function (item, review) {
          StoreService.addReview(item, review);
          $scope.review = {};
        };

      });

})();


//admin controller

(function() {
  "use strict";
  angular.module('storeApp')
    .controller('AdminController', function (StoreService, $rootScope, $scope, $routeParams, $location) {

      var adminCtrl = this;  //alias for AdminController

      StoreService.getItems().success(function(data) {
        adminCtrl.items = data;
      });

      StoreService.getItem($routeParams.itemIndex).success(function(data) {
        adminCtrl.singleItem = data;
        // or item?
      });

      adminCtrl.currentIndex = $routeParams.itemIndex;

  // add product
      adminCtrl.addProduct = function (newItem) { //using this method in form in addNewItem.html
        //newItem.price = parseInt(newItem.price);
        StoreService.addItem(newItem); //see service's public API method
        // $scope.newItem = {};  //to clear out form
        $location.path('/admin/listView'); //to go back to listView

      };

  // delete product
      adminCtrl.deleteProduct = function (id) {   //was (item)
        StoreService.deleteItem(id);
      };

  // edit product
      adminCtrl.editProduct = function (item) {
        // $location.path('/admin/listView');
        StoreService.editItem(item, $routeParams.itemIndex);  //or just item._id?
        $location.path('/admin/listView');
      };

    });
})();
