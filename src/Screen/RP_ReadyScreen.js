import React, {useState, createRef} from 'react';

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  //ScrollView,
  Keyboard,
  //Button,
  //KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const RP_ReadyScreen = ({navigation, props}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <View style={{flex: 2}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/success.png')}
            style={{
              height: 32,
              width: 32,
              opacity: 0.5,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: 65,
              marginBottom: 5,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#7F8083CC',
              fontSize: 15,
              marginBottom: 30,
              fontWeight: 'bold',
            }}>
            Connection Success
          </Text>
        </View>

        <View
          style={{
            height: 40,
            justifyContent: 'center',
          }}>
          <View style={styles.btnArea}>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.6}
              onPress={() => navigation.navigate('MainHome')}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                CLICK to go HOME
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  btnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  btn: {
    width: '90%',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72DFC5',
    height: 40,
    elevation: 4,
  },
});
export default RP_ReadyScreen;
