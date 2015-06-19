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
          location:{
            longitude: 0.0,
            latitude: 0.0
          },
          fullAddress:"",
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

  var singleton;

  InfoModel.singleton = function(){
    if(!singleton){
      singleton = new InfoModel();
    }
    return singleton;
  };

  return InfoModel;

});

