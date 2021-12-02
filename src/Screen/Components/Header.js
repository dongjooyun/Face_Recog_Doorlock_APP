import React, {useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  BackHandler,
} from 'react-native';

const Header = ({navigation, route, ...props}) => {
  const onGoBack = () => {};

  return <View style={styles.HeaderContainer}></View>;
};

function handleBackPress() {
  console.log('pressed backbutton');
  return true;
}

const BackBtn = ({navigation, route, ...props}) => {
  this.backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    this.handleBackPress,
  );
  return <View style={styles.BackBtnContainer}></View>;
};

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: '#fff',
    position: absolute,
    height: '56px',
    left: '0px',
    right: '0px',
    top: '28px',
  },

  BackBtnContainer: {
    position: absolute,
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',

    /* Gray Color */
    background: '#5F5F5F',
  },
});

export default Header;
