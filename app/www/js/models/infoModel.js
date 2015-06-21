/*
A model with one basketItem for the list of basket
*/
/*global marked*/
define(function (require) {
  'use strict';

  var config = require("../config"); 
  // var marked = require('marked');
  var ajaxHandler = require("../ajaxHandler");
  
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
          location: {
            longitude: 0.0,
            latitude: 0.0
          },
          fullAddress: "",
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
    },

    parse: function(response) {
      console.log(response);
      if(response && response.contact && response.contact.fullAddress){
        response.contact.fullAddress = marked(response.contact.fullAddress);
      }
      return response;
    },

    // options : {
    //    data: {
    //      name: 'your name',
    //      email: 'your email',
    //      website: 'your website',
    //      comment: 'yout comment'
    //    },
    //    success: callback for success.
    //    error: callback for error
    //   }
    contactUs: function(options){
      ajaxHandler.postAjax({
        url: config.apiUrl + "/contact",
        type: 'POST',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(options.data),
        success: function (data){
          if(options.success){
            options.success(data);
          }
        },
        error: function (resp){
          if(options.error){
            options.error(resp);
          }
        }

      });
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

