var Photo = Backbone.Model.extend({
  click: function(){
    this.trigger('click', this);
  }
})