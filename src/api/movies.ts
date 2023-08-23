import {nowPlayingMoviesUrl} from './apiValues';

const getData = async (url: string): Promise<any> => {
  try {
    return (await fetch(url)).json();
  } catch (error: any) {
    return error;
  }
};

export const getNowPlayingMovies = async () =>
  (await getData(nowPlayingMoviesUrl)).results;
