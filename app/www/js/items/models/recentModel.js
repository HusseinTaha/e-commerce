/*
A model with one basketItem for the list of basket
*/
define(function (/*require*/) {
  'use strict';

  
  var RecentModel = Backbone.Model.extend({
    defaults: {
      name: "",
      shortDesc: "",
      price: "",
      img: "img/photos/noPhoto.png"
    },

    initialize: function(/*options*/){
    }
  });


  return RecentModel;

});

