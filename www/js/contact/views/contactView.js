define(function (require) {
  'use strict';

    var template = require("../../text!../../../templates/contactView.html");

    var ContactView = Backbone.View.extend({

      template: _.template(template),

      initialize: function (options) {
        this.main = options.main;
        this.info = options.info;
        this.info.bind("change", this.render, this);
      },

      events: {
        "click .submit-button": "submit"
      },

      hideError: function(options){
        if(!this.$('.name-error').hasClass('hidden')){
          this.$('.name-error').addClass('hidden');
        }
        if(!this.$('.email-error').hasClass('hidden')){
          this.$('.email-error').addClass('hidden');
        }
        if(!this.$('.website-error').hasClass('hidden')){
          this.$('.website-error').addClass('hidden');
        }
        if(!this.$('.comment-error').hasClass('hidden')){
          this.$('.comment-error').addClass('hidden');
        }
      },

      checkFields: function(name, email, website, comment){
        this.hideError();
        var error = false;
        if(name === ''){
          this.$('.name-error').removeClass('hidden');
          error = true;
        }
        if(email === ''){
          this.$('.email-error').removeClass('hidden');
          error = true;
        }
        if(website === '')
        {
          this.$('.website-error').removeClass('hidden');
          error = true;
        }
        if(comment === '')
        {
          this.$('.comment-error').removeClass('hidden');
          error = true;
        }
        return error;
      },

      submit: function(e){
        e.preventDefault();
        var name = this.$('.name-input').val();
        var email = this.$('.email-input').val();
        var website = this.$('.website-input').val();
        var comment = this.$('.comment-input').val();
        if(this.checkFields(name, email, website, comment)){
          return;
        }
      },

      render: function () {
          $(this.el).html(this.template(this.info.toJSON()));
          return this;
      }

    });
    return ContactView;
});