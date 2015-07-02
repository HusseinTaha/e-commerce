/*
The collection of all the items of a country.
The collection is fetched through the api following the country code.
*/
define(function (require) {
  'use strict';

  var config = require("../../config");
  var ItemModel = require("./itemModel.js");
  
  var ItemsCollection = Backbone.Collection.extend({
    model: ItemModel,

    initialize: function(/*models, options*/) {
      this.url = config.apiUrl + '/items/popular';
    }
  });

  var all;

  ItemsCollection.getInstance = function() {
    var users = all;
    if (!users) {
      all = new ItemsCollection([], {});
    }
    return all;
  };

  return ItemsCollection;

});