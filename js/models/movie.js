MovieTracker.WatchedMixin = Ember.Mixin.create({
  isWatched: function() {
    var title = this.get('title'), watched = this.get('watched');
    return('Has ' + title + ' beed watched? ' + watched);
  }
});

MovieTracker.Movie = Ember.Object.extend(MovieTracker.WatchedMixin, {
  id: null,
  title: null,
  watched: false,
  rating: 0,
  titleAndRating: function() {
    return this.get('title') + ' has a rating of ' + this.get('rating');
  }.property('title', 'rating'),
  titleChanged: function() {
    console.log('Title changed');
  }.observes('title')
});

MovieTracker.ActionMovie = MovieTracker.Movie.extend({
  genre: "action"
});
