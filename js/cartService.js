// (function () {
//   "use strict";
//
//   angular.module('storeApp')
//   .factory('CartService', function () {
//     var cartItems = [];
//
//     var getCartProducts = function () {
//       return cartItems;
//
//     };
//
//     var addCartProduct = function (item) {
//       cartItems.push(item);
//
//     };
//
//     var deleteCartProduct = function (item) {
//       var idx = cartItems.indexOf(item);
//       cartItems.splice(idx,1);
//     };
//
//     var getSingleCartItem = function (index) {
//       return cartItems[index];
//     };
//
//     var editCartProduct = function (item, index) {
//       // var index = cartItems.indexOf(item);
//       cartItems[index] = item;
//     };
//
//
//     //left side: public API for controller, right side: local service function
//     return {
//       getCartItems: getCartProducts,
//       addCartItem: addCartProduct,
//       deleteCartItem: deleteCartProduct,
//       getCartItem: getSingleCartItem,
//       editCartItem: editCartProduct
//     };
//
//   });
//
// })();
