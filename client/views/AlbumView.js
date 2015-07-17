var AlbumView = Backbone.View.extend({

  initialize: function(){
    this.render();
    this.collection.on('add', this.render, this);
  },

  render: function(){
    // this.$el.detach();
    return this.$el.html('<h2>Album</h2>').append(this.collection.map(function(photo) {
      return new PhotoView({model: photo}).render();
    }));
  }
});