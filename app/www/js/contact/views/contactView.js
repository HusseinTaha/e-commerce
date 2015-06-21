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

      hideError: function(fields){
        if(fields){
          for(var i = 0, len = fields.length; i < len; i++){
            if(!this.$('.' + fields[i] + '-error').hasClass('hidden')){
              this.$('.' + fields[i] + '-error').addClass('hidden');
            }
          }
        }
      },

      checkFields: function(name, email, website, comment){
        var fields = ['name', 'email', 'website', 'comment'];
        var values = [name, email, website, comment];
        this.hideError(fields);
        var error = false;
        for(var i = 0, len = fields.length; i < len; i++){
            if(values[i] === ''){
              this.$('.' + fields[i] + '-error').removeClass('hidden');
              error = true;
            }
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
        var that = this;
        this.info.contactUs({
          data: {
            name: name,
            email: email,
            website: website,
            comment: comment
          },
          success: function(data){
            if(data.success){
              swal('Success', "Your comment has been sent!", "success");
              that.$('.name-input').val('');
              that.$('.email-input').val('');
              that.$('.website-input').val('');
              that.$('.comment-input').val('');
            }else{
              swal('Oops!', data.message, "error");
            }
            
          },
          error: function(err){
            swal('Oops!', err, "error");
          }
        });
      },

      render: function () {
          $(this.el).html(this.template(this.info.toJSON()));
          return this;
      }

    });
    return ContactView;
});