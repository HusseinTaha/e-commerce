/*
This is the collection of all the basketItems covered by the app.
The data is fetched through the RESTful API.
*/
define(function (require) {
  'use strict';

  var RecentModel = require("./recentModel");
  var config = require("../../config");

  var RecentCollection = Backbone.Collection.extend({
    model: RecentModel,
    // localStorage: new Backbone.LocalStorage("recentCollection"),

    initialize: function(/*models, options*/) {
      this.url = config.apiUrl + '/items/recent';
    }

  });
  var singleton;
  RecentCollection.getInstance = function () {
    var recent = singleton;
    if (!recent) {
      recent = new RecentCollection();
      singleton = recent;
    }
    return recent;
  };


  return RecentCollection;

});