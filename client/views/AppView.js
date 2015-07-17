var AppView = Backbone.View.extend({

  initialize: function(){
    this.photosView = new PhotosView({collection: this.model.get('library')});
    this.albumView = new AlbumView({collection: this.model.get('album')});
    this.render();
  },

  render: function(){
    $('body').append(this.photosView.render(), this.albumView.render());
  }

})