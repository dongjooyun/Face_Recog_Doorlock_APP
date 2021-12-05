import React, {useState, createRef} from 'react';

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
//import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
//import Loader from './Components/Loader';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  //Keyboard,
  //Modal,
  //ScrollView,
  //Platform,
} from 'react-native';

const MainScreen = ({navigation, props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileArea}>
        <View style={styles.TextTitleArea}>
          <Text style={styles.TextTitle}>AiKHUlock</Text>
        </View>
        <View style={styles.content}>
          <Image
            style={styles.ImageProfile}
            source={require('../../assets/frlIf.png')}
            //style={{width: wp(30), resizeMode: 'contain'}}
          />
        </View>
        <View style={styles.TextIDArea}>
          <Text style={styles.TextID}>@djyun</Text>
        </View>
      </View>

      <View style={styles.btnArea}>
        <View style={styles.settingsBtnArea}>
          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => navigation.navigate('Menus', {screen: 'Setting'})}
            activeOpacity={0.6}>
            <Text style={styles.TextSetting}>User Settings</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logsBtnArea}>
          <TouchableOpacity
            style={styles.logsBtn}
            onPress={() => navigation.navigate('Menus', {screen: 'Log'})}
            activeOpacity={0.6}>
            <Text style={styles.TextLog}>Doorlock Logs</Text>
            <View style={styles.numOfLogsArea}>
              <Text style={styles.numOfLogs}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.creditsBtnArea}>
          <TouchableOpacity
            style={styles.creditsBtn}
            onPress={() => navigation.navigate('Menus', {screen: 'Credit'})}
            activeOpacity={0.6}>
            <Text style={styles.TextCredit}>Credits</Text>
          </TouchableOpacity>
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
  profileArea: {
    flex: 11,
    backgroundColor: '#4282EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextTitleArea: {},
  TextTitle: {
    marginTop: -20,
    color: 'white',
    fontSize: 32,
    fontFamily: 'Coiny-Regular',
    backgroundColor: '#4282EF',
  },
  content: {
    marginTop: 20,
  },
  ImageProfile: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  TextIDArea: {marginTop: 10},
  TextID: {color: 'white', fontSize: 18},
  btnArea: {
    flex: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsBtnArea: {
    flex: 8,
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  settingsBtn: {
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72DFC5',
    height: 100,
    elevation: 4,
  },
  TextSetting: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logsBtnArea: {
    flex: 8,
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
    marginTop: -50,
    marginBottom: -50,
  },
  logsBtn: {
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72DFC5',
    height: 100,
    elevation: 4,
  },
  TextLog: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  numOfLogsArea: {},
  numOfLogs: {
    width: 18,
    height: 18,
    borderRadius: 3,
    color: 'white',
    backgroundColor: '#C9322B',
    marginLeft: 110,
    marginTop: -25,
    position: 'absolute',
  },
  creditsBtnArea: {
    flex: 8,
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 60,
  },
  creditsBtn: {
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72DFC5',
    height: 100,
    elevation: 4,
  },
  TextCredit: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default MainScreen;
