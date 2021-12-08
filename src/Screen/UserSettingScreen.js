import React, {useState, createRef} from 'react';
import 'react-native-gesture-handler';
//import Loader from './Components/Loader';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Keyboard,
  //KeyboardAvoidingView,
} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

const UserSettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.FaceArea}>
        <View style={styles.settingTitleArea}>
          <Text style={styles.TextSettingFace}>Face Settings</Text>
        </View>
        <View style={styles.FaceInfoArea}>
          <View style={styles.InfoArea}>
            <View style={styles.TextUserIDArea}>
              <Text style={styles.TextInfoTitle}>UserID</Text>
            </View>
            <View style={styles.TextUserIDArea}>
              <Text style={styles.TextInfo}>@djyun16</Text>
            </View>
          </View>
          <View style={styles.InfoArea}>
            <View style={styles.TextisFaceRegArea}>
              <Text style={styles.TextInfoTitle}>isFaceRegistered</Text>
            </View>
            <View style={styles.TextisFaceRegArea}>
              <Text style={styles.TextInfo}>registered</Text>
            </View>
          </View>
          <View style={styles.InfoArea}>
            <View style={styles.TextFaceIDArea}>
              <Text style={styles.TextInfoTitle}>FaceID</Text>
            </View>
            <View style={styles.TextFaceIDArea}>
              <Text style={styles.TextInfo}>a-1</Text>
            </View>
          </View>
          <View style={styles.regFaceBtnArea}>
            <TouchableOpacity
              style={styles.regFaceBtn}
              onPress={() =>
                navigation.navigate('FaceID', {screen: 'RegFaceID'})
              }
              activeOpacity={0.6}>
              <Text style={styles.TextRegFaceBtn}>Register FaceID</Text>
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
  FaceArea: {flex: 2.5},
  RPArea: {flex: 1},

  settingTitleArea: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4282EF',
    height: 60,
    width: '100%',
  },
  TextSettingFace: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  FaceInfoArea: {
    flex: 7,
    justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 60,
    //marginBottom: 20,
    marginLeft: 20,
  },
  InfoArea: {marginBottom: 30},

  TextFaceIDArea: {},
  TextUserIDArea: {},
  TextisFaceRegArea: {},

  TextInfoTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    height: 40,
    marginBottom: -20,
  },
  TextInfo: {
    fontSize: 16,
    height: 40,
    textDecorationLine: 'underline',
  },
  regFaceBtnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginLeft: -20,
  },
  regFaceBtn: {
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72DFC5',
    height: 40,
    elevation: 4,
  },
  TextRegFaceBtn: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  RPInfoArea: {
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 10,
  },
  TextSettingRP: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  TextRPIDArea: {
    justifyContent: 'center',
  },
  connectRPbtnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    marginLeft: -10,
  },
  connectRPbtn: {
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72DFC5',
    height: 40,
    elevation: 4,
  },
  TextConnectRPBtn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default UserSettingScreen;
