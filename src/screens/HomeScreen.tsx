import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTSIZE, SPACING} from '../theme/defaultTheme';
import InputHeader from '../components/InputHeader';
import {getData} from '../api/movies';
import {popularMoviesUrl} from '../api/apiValues';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}: any) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any>(null);
  const [popularMovies, setPopularMovies] = useState<any>(null);
  const [upcomingMovies, setUpcomingMovies] = useState<any>(null);

  const searchMovie = (): void => navigation.navigate('Search');

  useEffect(() => {
    const getPopularMovies = async () =>
      setNowPlayingMovies({...(await getData(popularMoviesUrl))});

    getPopularMovies();
  }, []);

  const renderMoviesSection = (): JSX.Element => {
    if (!(nowPlayingMovies || popularMovies || upcomingMovies)) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.Orange} />
        </View>
      );
    }

    return (
      <View style={styles.loadingContainer}>
        <Text style={{fontSize: FONTSIZE.s_30, color: COLORS.Orange}}>
          MOVIES!
        </Text>
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      contentContainerStyle={styles.scrollViewContainer}>
      <StatusBar hidden />
      <View style={styles.inputHeaderContainer}>
        <InputHeader onSearch={searchMovie} />
      </View>
      {renderMoviesSection()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.Black,
  },

  scrollViewContainer: {
    flex: 1,
  },

  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  inputHeaderContainer: {
    marginHorizontal: SPACING.s_36,
    marginTop: SPACING.s_28,
  },
});

export default HomeScreen;
