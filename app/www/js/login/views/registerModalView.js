define(function (require) {
  'use strict';

    var template = require("../../text!../../../templates/registerModal.html");

    var RegisterModalView = Backbone.View.extend({

      template: _.template(template),

      initialize: function (/*options*/) {
        // this.main = options.main;
      },

      events: {

      },

      render: function () {
          $(this.el).html(this.template());
          return this;
      }

    });
    return RegisterModalView;
});