/*
A model with one basketItem for the list of basket
*/
define(function (require) {
  'use strict';

  var config = require("../../config");
  
  var ItemDetailedModel = Backbone.Model.extend({
    defaults: {
      name: '',
      price: '',
      shipping: '',
      brand: '',
      modal: '',
      availability: '',
      colors: [
      ],
      description: '',
      features: [
      ],
      specs: {
        memory: '',
        storage: '',
        camera: '',
        processor: '',
        battery: ''
      },
      reviews: [
      ],
      imgs: [
      ]
    },

    initialize: function(/*options*/){
      this.urlRoot = config.apiUrl + "/items/details/";
    }
  });


  return ItemDetailedModel;

});

