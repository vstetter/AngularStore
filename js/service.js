//service: reusable business logic independent of views

(function () {
"use strict";

angular.module('storeApp')
  .factory('StoreService', function () {

    var url = 'http://tiy/fee-rest.herokuapp.com/collections/ngserverlightbox';
    var products = [
    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/43/c5/9e/43c59e8cc179639ecbf9f28d9f9927c8.jpg",
      productName: "Random Light by Moooi",
      price: "655",
      productDescription: "Modern classic made from resin drained yarn.",
      review: []

    },

    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/65/5e/cc/655ecc43b71c7dafeac28056dab65917.jpg",
      productName: "Alium Light by John Lewis",
      price: "320",
      productDescription: "Light with 36 arms and crystal glass beads.",
      review: []

    },

    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/b7/b6/92/b7b69237e7396f7bc5fcc285b5bf11f6.jpg",
      productName: "Roberta Pendant by John Lewis",
      price: "300",
      productDescription: "Brass rings with crystal drop glass droplets.",
      review: []
    },

    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/f9/e1/e7/f9e1e7093e39b1c553de06a81fb63d80.jpg",
      productName: "The Nest by Edward Linacre",
      price: "345",
      productDescription: "Honeycomb pendant light made from bamboo veneer.",
      review: []
    },

    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/1b/66/c6/1b66c60d689f371f31883ce526edd4a0.jpg",
      productName: "Koura Light by David Trubridge",
      price: "450",
      productDescription: "Bamboo plywood light comes ready to assemble.",
      review: []
    },

    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/6d/ea/f8/6deaf89320625eb1b179e82354db049a.jpg",
      productName: "Pendant 2 by Flaco Design",
      price: "400",
      productDescription: "Ash veneer pendant handmade in Denmark.",
      review: []
    }

    ];

    var cartProducts = [

    ];

    var getProducts = function () {
      // return $http.get(url);
      return products;
    };

    var addProduct = function (item) {
      products.push(item);

      // $http.post(url, item);
      // $rootScope.$broadcast('item:created');

    };

    var addReview = function (review) {
      products.push(review)
    };


    var deleteProduct = function (item) {
      var idx = products.indexOf(item);
      products.splice(idx,1);
      // $http.delete(url + '/' + id);
      // $rootScope.$broadcast('item:deleted');
    };

    var getSingleItem = function (index) {
      return products[index];
    };

    var editProduct = function (item, index) {
      // var index = products.indexOf(item);
      products[index] = item;
      // $http.put(url + '/' + id, item);
      // $rootScope.$broadcast('item:updated');
    };

    var addToCart = function (item) {
      cartProducts.push(item);
    };

    var getCartProducts = function () {
      return cartProducts;
    };

    var getSingleCartProduct = function (index) {
      return cartProducts[index];
    };

    var deleteCartProducts = function (item) {
      var idx = cartProducts.indexOf(item);
      cartProducts.splice(idx,1);
    };




//left side: public API for controller, right side: local service function
    return {
      getItems: getProducts,
      addItem: addProduct,
      deleteItem: deleteProduct,
      getItem: getSingleItem,
      editItem: editProduct,
      addToCart: addToCart,
      getCartItems: getCartProducts,
      deleteFromCart: deleteCartProducts,
      getCartItem: getSingleCartProduct,
      addReview: addReview
    };

  });

})();
