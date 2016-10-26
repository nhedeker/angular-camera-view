(function() {
  'use strict';

  const app = angular.module('cameraApp');

  app.controller('CartCtrl', function() {
    this.shoppingCart = [];
    this.total = 0;
    this.tax = 0;
    this.subtotal = 0;

    this.calculateCheckout = function() {
      this.subtotal = this.shoppingCart.reduce(function(result, element) {
        return result + (element.price * element.quantity);
      }, 0);
      this.tax = this.subtotal * .065;
      this.total = this.tax + this.subtotal;
    };

    this.addItem = function(camera) {
      for (let element of this.shoppingCart) {
        if (element.id === camera.id) {
          element.quantity++;
          this.calculateCheckout();
          return;
        }
      }
      this.shoppingCart.push({
        id: camera.id,
        name: camera.name,
        price: camera.price,
        quantity: 1
      });
      this.calculateCheckout();
    };

    this.removeItem = function(camera) {
      this.shoppingCart.splice(this.shoppingCart.indexOf(camera), 1);
      this.calculateCheckout();
    }
  });

  app.controller('CameraCtrl', function() {
    this.search = '';
    this.ordering = 'name';
    this.catalog = [
      {
        id: 1,
        name: 'Nikon D3100 DSLR',
        image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
        rating: 4,
        price: 369.99,
        onSale: true
      },
      {
        id: 2,
        name: 'Canon EOS 70D',
        image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
        rating: 2,
        price: 1099.0,
        onSale: false
      },
      {
        id: 3,
        name: 'Nikon D810A', image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
        rating: 3,
        price: 3796.95,
        onSale: true
      }
    ];
  });
})();
