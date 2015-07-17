var PhotoView = Backbone.View.extend({
  model: Photo,

  initialize: function(){
  },

  events: {
    'click': function(){
      this.model.click();
    }
  },

  template: _.template('<div class="img"><%- source %></div>'),

  render: function(){
    console.log(this.model.attributes);
    return this.$el.append(this.template(this.model.attributes));
  }
})