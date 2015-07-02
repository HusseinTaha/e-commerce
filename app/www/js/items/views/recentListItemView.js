define(function (require) {
  'use strict';

  var template = require("../../text!../../../templates/recentListItemView.html");

  var RecentListItemView = Backbone.View.extend({

    tagName: "div",
    className: "item",
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
  return RecentListItemView;

});