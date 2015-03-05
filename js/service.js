//service: reusable business logic independent of views

(function () {
"use strict";

angular.module('storeApp')
  .factory('StoreService', function ($http, $rootScope) {

    var url = 'http://tiy-fee-rest.herokuapp.com/collections/lightbox';

    // var products = [
    // {
    //   image: "https://s-media-cache-ak0.pinimg.com/736x/43/c5/9e/43c59e8cc179639ecbf9f28d9f9927c8.jpg",
    //   productName: "Random Light by Moooi",
    //   price: "655",
    //   productDescription: "Modern classic made from resin drained yarn.",
    //   review: []
    //
    // },
    //
    // {
    //   image: "https://s-media-cache-ak0.pinimg.com/736x/65/5e/cc/655ecc43b71c7dafeac28056dab65917.jpg",
    //   productName: "Alium Light by John Lewis",
    //   price: "320",
    //   productDescription: "Light with 36 arms and crystal glass beads.",
    //   review: []
    //
    // },
    //
    // {
    //   image: "https://s-media-cache-ak0.pinimg.com/736x/b7/b6/92/b7b69237e7396f7bc5fcc285b5bf11f6.jpg",
    //   productName: "Roberta Pendant by John Lewis",
    //   price: "300",
    //   productDescription: "Brass rings with crystal drop glass droplets.",
    //   review: []
    // },
    //
    // {
    //   image: "https://s-media-cache-ak0.pinimg.com/736x/f9/e1/e7/f9e1e7093e39b1c553de06a81fb63d80.jpg",
    //   productName: "The Nest by Edward Linacre",
    //   price: "345",
    //   productDescription: "Honeycomb pendant light made from bamboo veneer.",
    //   review: []
    // },
    //
    // {
    //   image: "https://s-media-cache-ak0.pinimg.com/736x/1b/66/c6/1b66c60d689f371f31883ce526edd4a0.jpg",
    //   productName: "Koura Light by David Trubridge",
    //   price: "450",
    //   productDescription: "Bamboo plywood light comes ready to assemble.",
    //   review: []
    // },
    //
    // {
    //   image: "https://s-media-cache-ak0.pinimg.com/736x/6d/ea/f8/6deaf89320625eb1b179e82354db049a.jpg",
    //   productName: "Pendant 2 by Flaco Design",
    //   price: "400",
    //   productDescription: "Ash veneer pendant handmade in Denmark.",
    //   review: []
    // }
    //
    // ];


// Admin

    var getProducts = function () {
      return $http.get(url);
      // return products;
    };

    var getSingleItem = function (id) {  // was (index)
      return $http.get(url + '/' +id);
    };

    var addProduct = function (item) {
      item.reviews = [];
      $http.post(url, item);
      $rootScope.$broadcast('item:created')
      // products.push(item);
    };

    var deleteProduct = function (id) {   //was (item)
      $http.delete(url + '/' + id);
      $rootScope.$broadcast('item:deleted');
    };

    var editProduct = function (item, id) {  //was (item, index)
      $http.put(url + '/' + id, item);
      $rootScope.$broadcast('item:updated');
      // var index = products.indexOf(item);
      // products[index] = item;
    };

// User

  // reviews

    var addReview = function (item, review) {
      item.reviews.push(review);
      $http.put(url + '/' + item._id, item);
    };

  // cart

    var cart = [ ];  //changed from cartProducts to cart

    var addToCart = function (item) {
      cart.push(item);
    };

    var getCartProducts = function () {
      return cart;
    };

    // var getSingleCartProduct = function (id) {
    //   return cart[id];
    // };

    var deleteCartProducts = function (item) {
      var idx = cart.indexOf(item);
      cart.splice(idx,1);
    };

    var total = function() {
      var total = 0;
      angular.forEach(cart, function(item) {
      total += item.quant * item.price;
      })
      return total;
    };


    return {
      getItems: getProducts,
      getItem: getSingleItem,
      addItem: addProduct,
      deleteItem: deleteProduct,
      editItem: editProduct,
      addReview: addReview,

      addToCart: addToCart,
      getCartItems: getCartProducts,
      // getCartItem: getSingleCartProduct,
      deleteFromCart: deleteCartProducts,
      total: total
    };

  });

})();
