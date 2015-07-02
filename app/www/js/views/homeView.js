define(function (require) {
  'use strict';

  var template = require("../text!../../templates/homeView.html");
  var ItemsListView = require("../items/views/itemsListView");

  var HomeView = Backbone.View.extend({

    template: _.template(template),

    events: {
    },

    initialize: function (options) {
      this.popularCollection = options.popularCollection;
      this.recentItems = options.recentItems;
      this.popularItemsView = new ItemsListView({collection: this.popularCollection, type: 'items'});
      this.recentItemsView = new ItemsListView({
        collection: this.recentItems,
        type: 'recent',
        tagName: "div",
        id: "owl-recent",
        className: "owl-carousel"
      });
      this.recentItems.bind("reset change remove", this.render, this);

    },

    runSlider: function(){
      this.$('.tp-banner').revolution(
                    {
                        delay: 9000,
                        startwidth: 1170,
                        startheight: 450,
                        hideThumbs: 200,
                        shadow: 0,
                        navigationType: "none",
                        hideThumbsOnMobile: "on",
                        hideArrowsOnMobile: "on",
                        hideThumbsUnderResoluition: 0,
                        touchenabled: "on",
                        fullWidth: "off"
                    });
    },

    runFlex: function(){
      var recent = this.$("#owl-recent");
      recent.owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        mouseDrag: false,
        pagination: false
      });
      
      this.$(".next").click(function(){
        recent.trigger('owl.next');
      });
        
      this.$(".prev").click(function(){
        recent.trigger('owl.prev');
      });
    },

    render: function () {
      $(this.el).html(this.template());
      $('.items-content', this.el).append(this.popularItemsView.render().el);
      $('.recent-item', this.el).append(this.recentItemsView.render().el);
      this.runSlider();
      this.runFlex();
      return this;
    }


  });
  return HomeView;

});