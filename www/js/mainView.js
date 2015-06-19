define(function (require) {
  'use strict';

  var HeaderView = require("./views/headerView");
  var FooterView = require("./views/footerView");
  var ajaxHandler = require("./ajaxHandler");

  var MainView = Backbone.View.extend({

    initialize: function () {
      this.headerView = new HeaderView({main: this});
      this.$('#header').html(this.headerView.render().el);

      var InfoModel = require("./models/infoModel");
      this.footerView = new FooterView({main: this, info: InfoModel.singleton()});
      this.$('#footer').html(this.footerView.render().el);
      InfoModel.singleton().fetch({               
        success: function(d){
        },
        error: function(m, r){
          ajaxHandler.errorFetchOrSave(m, r);
        }
      });
    }, 


    render: function() {
      return this;
    },

    renderView: function(view) {
      if (this.contentView) {
        this.contentView.undelegateEvents();
        this.contentView.remove();
      }

      this.$("#content").html(view.render().el);
      this.contentView = view;
    },

    start: function(){
      var AppRouter = require("./router");
      this.router = new AppRouter({main: this});
      Backbone.history.start();
    }

  });
return MainView;
});
