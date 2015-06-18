define(function (require) {
  'use strict';

    var template = require("../text!../../templates/headerView.html");

    var HeaderView = Backbone.View.extend({

      template: _.template(template),

      initialize: function (options) {
        this.main = options.main;
      },

      render: function () {
          $(this.el).html(this.template());
          return this;
      }

    });
    return HeaderView;
});