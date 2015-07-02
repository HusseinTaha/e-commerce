define(function (require) {
  'use strict';

  var template = require("../../text!../../../templates/itemsListItemView.html");

  var ItemsListItemView = Backbone.View.extend({

    template: _.template(template),

    initialize: function () {
      this.model.bind("change", this.render, this);
      this.model.bind("destroy", this.close, this);
    },

    events: {

    },

    render: function () {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }

  });
  return ItemsListItemView;

});