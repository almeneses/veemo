import {
  nowPlayingMoviesUrl,
  popularMoviesUrl,
  upcomingMoviesUrl,
} from './apiValues';

const getData = async (url: string): Promise<any> => {
  try {
    return (await fetch(url)).json();
  } catch (error: any) {
    return error;
  }
};

export const getNowPlayingMovies = async () =>
  (await getData(nowPlayingMoviesUrl)).results;

export const getPopularMovies = async () =>
  (await getData(popularMoviesUrl)).results;

export const getUpcomingMovies = async () =>
  (await getData(upcomingMoviesUrl)).results;
