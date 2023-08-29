import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import {COLORS, SPACING} from '../theme/defaultTheme';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getUpcomingMovies,
} from '../api/movies';
import MoviesSubSection from '../components/MoviesSubSection';
import InputHeader from '../components/InputHeader';

const HomeScreen = ({navigation}: any) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any>(null);
  const [popularMovies, setPopularMovies] = useState<any>(null);
  const [upcomingMovies, setUpcomingMovies] = useState<any>(null);

  const searchMovie = (): void => navigation.navigate('Search');
  const onMovieCardPress = (): void => navigation.navigate('MovieDetails');

  useEffect(() => {
    const fetchMoviesData = async () =>
      Promise.all([
        getNowPlayingMovies(),
        getPopularMovies(),
        getUpcomingMovies(),
      ]).then(([nowPlaying, popular, upcoming]) => {
        setNowPlayingMovies(nowPlaying);
        setPopularMovies(popular);
        setUpcomingMovies(upcoming);
      });

    fetchMoviesData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        bounces={false}
        horizontal={false}
        nestedScrollEnabled={true}>
        <StatusBar hidden />
        <View style={styles.inputHeaderContainer}>
          <InputHeader onSearch={searchMovie} />
        </View>
        <View style={styles.container}>
          <MoviesSubSection
            title="Now Playing"
            data={nowPlayingMovies}
            onItemPress={onMovieCardPress}
          />
          <MoviesSubSection
            title="Popular"
            data={popularMovies}
            onItemPress={onMovieCardPress}
          />
          <MoviesSubSection
            title="Upcoming"
            data={upcomingMovies}
            onItemPress={onMovieCardPress}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  inputHeaderContainer: {
    marginHorizontal: SPACING.s_24,
  },
});

export default HomeScreen;
