/*
A model with one basketItem for the list of basket
*/
define(function (require) {
  'use strict';

  var config = require("../config"); 
  
  var InfoModel = Backbone.Model.extend({
    defaults: function() {
       var d = new Date();
       var year = d.getFullYear();
      return {
        contact: {
          social: {
            facebook: "",
            twitter: "",
            linkedin: "",
            google: ""
          },
          address: "",
          phone: "",
          email: ""
        },
        about: "",
        year: year
      };
    },
    initialize: function(/*options*/){
      this.urlRoot = config.apiUrl + "/info";
    }
  });

  return InfoModel;

});

