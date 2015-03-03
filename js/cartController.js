//
// (function () {
//   "use strict";
//
//   angular.module('storeApp')
//   .controller('CartController', function (CartService, $scope, $routeParams, $location) {
//     var cartCtrl = this;  //alias for CartController
//
//
//     cartCtrl.items = CartService.getItems(); //getting data from product array in service
//
//     cartCtrl.singleItem = CartService.getItem($routeParams.itemIndex);
//
//     // add product
//     cartCtrl.addProduct = function (newItem) { //
//       CartService.addItem(newItem); //see service's public API method
//       $scope.newItem = {};  //to clear out form
//       // $location.path('/admin/listView');
//
//     };
//
//     // delete product
//     cartCtrl.deleteProduct = function (item) {
//       CartService.deleteItem(item);
//     };
//
//     // edit product
//     cartCtrl.editProduct = function (item) {
//       CartService.editItem(item, $routeParams.itemIndex);
//       // $location.path('/admin/listView');
//     };
//
//
//   });
//
// }) ();
