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
      "home": "home"
    },

    initialize: function(options) {
      this.main = options.main;
    },
     
    home: function() {
        var HomeView = require("./views/homeView");
        this.renderView(new HomeView());
    },

    renderView: function(view) {
      this.main.renderView(view);
    }

  });

    return Router;
});

