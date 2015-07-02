define(function (require) {
  'use strict';

  var ItemsListItemView = require("./itemsListItemView");
  var RecentListItemView = require("./recentListItemView");

  var ItemsListView = Backbone.View.extend({

    initialize: function (options) {
      this.type = options.type;
      this.ItemViewType = this.getModelType();
      var that = this;
      this.collection.bind("reset change remove", this.render, this);
      this.collection.bind("add", function (item) {
        $(that.el).append(new that.ItemViewType({
          model: item
        }).render().el);
      });
    },

    getModelType: function () {
      var Class;
      switch (this.type) {
      case 'recent':
        Class = RecentListItemView;
        break;
      case 'items':
        Class = ItemsListItemView;
        break;
      }
      return Class;
    },

    render: function () {
      $(this.el).empty();
      _.each(this.collection.models, function (item) {
        $(this.el).append(new this.ItemViewType({
          model: item
        }).render().el);
      }, this);
      return this;
    }
  });
  return ItemsListView;

});