define(function (require) {
  'use strict';

  var template = require("../text!../../templates/homeView.html");


  var HomeView = Backbone.View.extend({

    template: _.template(template),

    events: {
    },

    initialize:function () {
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
        items : 4,
        mouseDrag : false,
        pagination : false
      });
      
      this.$(".next").click(function(){
        recent.trigger('owl.next');
      });
        
      this.$(".prev").click(function(){
        recent.trigger('owl.prev');
      });
    },

    render:function () {
      $(this.el).html(this.template());
      this.runSlider();
      this.runFlex();
      return this;
    }


  });
  return HomeView;

});