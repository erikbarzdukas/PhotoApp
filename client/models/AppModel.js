var App = Backbone.Model.extend({
 
  initialize: function(){ 
    this.set('album', new Album());
    
    this.get('library').on('click', function(photo) {
      this.get('album').add(photo);
      console.log(this.get('album'));
    }, this);
  },

})