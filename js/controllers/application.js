MovieTracker.ApplicationController = Ember.Controller.extend();


MovieTracker.moviesController = Ember.ArrayController.create();
MovieTracker.moviesController.set('content', [
  MovieTracker.Movie.create({
    title: 'Movie 1',
    rating: 4
  }),
  MovieTracker.Movie.create({
      title: 'Movie 2',
      rating: 5
  })
]);

MovieTracker.selectedMovieController = Ember.ObjectController.create({
  selectedMovie: [],
  select: function(item) {
    this.set('selectedMovie', item);
  },
  toggleWatched: function() {
    this.selectedMovie.toggleProperty('watched');
  }
});
