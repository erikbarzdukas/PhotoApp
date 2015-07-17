var PhotosView = Backbone.View.extend({
  collection: Photos,

  intialize: function(){
    this.render();
  },

  render: function(){
    return this.$el.html('<h2>Library</h2>').append(this.collection.map(function(photo){
      return new PhotoView({model: photo}).render();
    }));
  }
});