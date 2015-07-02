/*
This is controller of the application where we have :
- Routing between the different screens of the app
- First rendering of tabView and LodadingView
*/
define(function (require) {
  'use strict';
  var ajaxHandler = require("./ajaxHandler");

  var Router = Backbone.Router.extend({


    routes: {
      "": "home",
      "home": "home",
      "contact": "contact"
    },

    initialize: function (options) {
      this.main = options.main;
    },

    home: function () {
      var ItemsCollection = require("./items/models/itemsCollection");
      var itemsCollection = ItemsCollection.getInstance();
      var RecentCollection = require("./items/models/recentCollection");
      var recentCollection = RecentCollection.getInstance();
      var HomeView = require("./views/homeView");
      this.renderView(new HomeView({popularCollection: itemsCollection, recentItems: recentCollection}));
      itemsCollection.fetch({
        reset: true,
        success: function(x){
          console.log(x);
        },
        error: function(/*c, er*/){

        }
      });
      recentCollection.fetch({
        reset: true,
        success: function(x){
          console.log(x);
        },
        error: function(/*c, er*/){
          
        }
      });
    },

    contact: function () {
      var ContactView = require("./contact/views/contactView");
      var InfoModel = require("./models/infoModel");
      this.renderView(new ContactView({
        info: InfoModel.singleton()
      }));
      InfoModel.singleton().fetch({
        /*               
                success: function(d){
                },*/
        error: function (m, r) {
          ajaxHandler.errorFetchOrSave(m, r);
        }
      });
    },

    renderView: function (view) {
      this.main.renderView(view);
    }

  });

  return Router;
});