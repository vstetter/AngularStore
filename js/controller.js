//controller: business logic behind views.  Exposes variables and functionality to expressions and directives.

(function () {
  "use strict";

  angular.module('storeApp')
    .controller('MainController', function (StoreService, $rootScope, $routeParams, $location) {   //inject service here
                                                                  //$location makes url available to app, allows changes to url
                                                                  //get current path: $location.path(); change path: $location.path('/newValue')
      var mainCtrl = this;  //alias for MainController

      StoreService.getItems().success(function(data) {
        mainCtrl.items = data;
      });
                                    //C: productId
      StoreService.getItem($routeParams.itemIndex).success(function(data) {
        mainCtrl.singleItem = data;
            // or item?
      });
                                    //C: productId
      mainCtrl.currentIndex = $routeParams.itemIndex;

  // add product
      mainCtrl.addProduct = function (newItem) { //using this method in form in addNewItem.html
        //newItem.price = parseInt(newItem.price);
        StoreService.addItem(newItem); //see service's public API method
        // $scope.newItem = {};  //to clear out form
        $location.path('/admin/listView'); //to go back to listView

      };

  // delete product
      mainCtrl.deleteProduct = function (id) {   //was (item)
        StoreService.deleteItem(id);
      };

  // edit product
      mainCtrl.editProduct = function (item) {
        StoreService.editItem(item, $routeParams.itemIndex);  //C: productId for my item Index
        $location.path('/admin/listView');
      };


    })
    .controller('CartController', function (CartService, $location) {

    // shopping cart

    var cartCtrl = this;  //C has this as cart, not cartCtrl - same as variable in service ??

    cartCtrl.cartProducts = CartService.getCartItems();
    // cart.total = 0; // or cartCtrl.total=0??

    // cartCtrl.singleCartItem = CartService.getCartItem($routeParams.itemIndex);

    cartCtrl.addToCart = function(item) {
      CartService.addToCart(item);
      $location.path('/user/cart');
    };

    cartCtrl.deleteFromCart = function(item) {
      CartService.deleteFromCart(item);
    };
    // not sure if I need update for cart

    // C: cart.updateTotal = function () {
    // cart.total = CartService.calculateTotal();
    //return cart.total;
    //};

    cartCtrl.total = function() {
      var total = 0;
      angular.forEach(cartCtrl.cartProducts, function(item) {
        total += item.quant * item.price;
      })
      return cartCtrl.total;
    };

  })
    .controller('ReviewController', function (StoreService, $scope, $routeParams, $location) {

      var reviewCtrl = this;

      reviewCtrl.addReview = function (review) {
        StoreService.addReview(review);
        $scope.review = {};
      };
    });

}) ();
