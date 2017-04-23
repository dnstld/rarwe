import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  baseURL: config.baseURL
});

Router.map(function() {
  this.route('bands', function() {
    this.route('band', { path: ':slug' }, function() {
        this.route('songs');
    });
  });
});

export default Router;
