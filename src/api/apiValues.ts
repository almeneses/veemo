import {MOVIE_API_KEY} from '@env';

export const nowPlayingMoviesUrl: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIE_API_KEY}`;
export const upcomingMoviesUrl: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${MOVIE_API_KEY}`;
export const popularMoviesUrl: string = `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}`;

export const searchMovieUrl = (searchTerm: string): string =>
  `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${searchTerm}`;

export const movieDetails = (id: number): string =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_API_KEY}`;

export const moviePoster = (width: number, posterPath: string) =>
  `http://image.tmdb.org/t/p/w${width}${posterPath}`;
