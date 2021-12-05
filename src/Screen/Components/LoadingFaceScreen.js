// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Text, StyleSheet, Image} from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   //heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-community/async-storage';

const LoadingFaceScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then(value =>
        navigation.replace(value === null ? 'FaceReady' : 'MainTab'),
      );
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.loadingArea}>
        <ActivityIndicator
          animating={animating}
          color="#B9B9B9"
          size="large"
          style={styles.activityIndicator}
        />
        <View style={styles.TextLoadArea}>
          <Text style={styles.TextLoad}>Loading...</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  loadingArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    marginBottom: 5,
  },
  TextLoadArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  TextLoad: {
    color: '#7F8083CC',
    fontSize: 15,
    marginBottom: 30,
  },
});

export default LoadingFaceScreen;
