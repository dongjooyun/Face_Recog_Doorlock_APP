// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Text, StyleSheet, Image} from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   //heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then(value =>
        navigation.replace(value === null ? 'Auth' : 'MainTab'),
      );
    }, 1500);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.titleArea}>
          {
            <View style={styles.content}>
              <Image
                style={styles.ImageLogo}
                source={require('../../assets/logo_512.png')}
                //style={{width: wp(30), resizeMode: 'contain'}}
              />
            </View>
          }
        </View>
        <View style={styles.TextAppArea}>
          <Text style={styles.TextTitle}>AiKHUlock</Text>
        </View>
      </View>
      <View style={{flex: 3}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4282EF',
  },
  topArea: {flex: 3.0},
  titleArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4282EF',
  },
  content: {
    marginTop: 200,
  },
  ImageLogo: {
    width: 256,
    height: 256,
    resizeMode: 'contain',
  },
  TextAppArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4282EF',
  },
  TextTitle: {
    marginTop: -20,
    color: 'white',
    fontSize: 40,
    fontFamily: 'Coiny-Regular',
    backgroundColor: '#4282EF',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
    //marginBottom: -100,
  },
});

export default SplashScreen;
