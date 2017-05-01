import Ember from 'ember';

export default Ember.Controller.extend({
  songCreationStarded: false,

  canCreateSong: Ember.computed('songCreationStarded', 'model.songs.length', function() {
    return this.get('songCreationStarded') || this.get('model.songs.length');
  }),

  actions: {
    enableSongCreation: function() {
      this.set('songCreationStarded', true);
    },
    updateRating: function(params) {
      var song = params.item,
          rating = params.rating;
      
      song.set('rating', rating);
    }
  }
});
