/*
This is controller of the application where we have :
- Routing between the different screens of the app
- First rendering of tabView and LodadingView
*/
define(function (require) {
    'use strict';

  var Router = Backbone.Router.extend({


     routes: {
      "": "home",
      "home": "home",
      "contact": "contact"
    },

    initialize: function(options) {
      this.main = options.main;
    },
     
    home: function() {
        var HomeView = require("./views/homeView");
        this.renderView(new HomeView());
    },

    contact: function() {
        var ContactView = require("./contact/views/contactView");
        var InfoModel = require("./models/infoModel");
        var ajaxHandler = require("./ajaxHandler");
        this.renderView(new ContactView({info: InfoModel.singleton()}));
        InfoModel.singleton().fetch({               
        success: function(d){
        },
        error: function(m, r){
          ajaxHandler.errorFetchOrSave(m, r);
        }
      });
    },

    renderView: function(view) {
      this.main.renderView(view);
    }

  });

    return Router;
});

