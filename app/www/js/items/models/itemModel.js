/*
A model with one basketItem for the list of basket
*/
define(function (/*require*/) {
  'use strict';
  
  var ItemModel = Backbone.Model.extend({
    defaults: {
      name: "",
      dealType: "",
      shortDesc: "",
      price: "",
      img: "img/photos/noPhoto.png"
    },

    initialize: function(/*options*/){
    }
  });


  return ItemModel;

});

