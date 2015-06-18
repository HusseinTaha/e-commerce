define(function (require) {
  'use strict';

    var template = require("../text!../../templates/footerView.html");

    var FooterView = Backbone.View.extend({

      template: _.template(template),

      initialize: function (options) {
        this.main = options.main;
        this.info = options.info;
        this.info.bind("change", this.render, this);
      },

      render: function () {
          $(this.el).html(this.template(this.info.toJSON()));
          return this;
      }

    });
    return FooterView;
});