import React, {useState, createRef, Component} from 'react';
import 'react-native-gesture-handler';
//import Loader from './Components/Loader';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  Keyboard,
  //KeyboardAvoidingView,
} from 'react-native';

const RegFaceIDScreen = ({navigation, props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.settingFaceArea}>
        <View style={styles.settingTitleArea}>
          <Text style={styles.TextSettingFace}>Facial Images</Text>
        </View>
      </View>
      <View style={styles.regImgBtnArea}>
        <TouchableOpacity
          style={styles.regImgBtn}
          onPress={() =>
            navigation.navigate('FaceID', {screen: 'UploadFaceImg'})
          }
          activeOpacity={0.6}>
          <Text style={styles.TextRegImgBtn}>Select Images from Gallery</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ImgInfoArea}>
        <View style={styles.InfoArea}>
          <View style={styles.TextNumOfImgArea}>
            <Text style={styles.TextInfoTitle}>Uploaded Images</Text>
          </View>
          <View style={styles.TextNumOfImgArea}>
            <Text style={styles.TextInfo}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.connectBtnArea}>
        <TouchableOpacity
          style={styles.connectBtn}
          onPress={() => navigation.navigate('FaceID', {screen: 'Loading'})}
          activeOpacity={0.6}>
          <Text style={styles.TextConnect}>Create FaceID</Text>
        </TouchableOpacity>
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
  settingTitleArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4282EF',
    height: 60,
  },
  settingFaceArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4282EF',
  },
  TextSettingFace: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  regImgBtnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  regImgBtn: {
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72DFC5',
    height: 40,
    elevation: 4,
  },
  TextRegImgBtn: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  ImgInfoArea: {
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 10,
  },
  InfoArea: {
    marginBottom: 30,
  },
  TextNumOfImgArea: {marginLeft: 20},
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
  settingRPArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4282EF',
  },
  TextIDArea: {marginTop: 10},
  TextID: {color: 'black', fontSize: 18},
  connectBtnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 420,
  },
  connectBtn: {
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72DFC5',
    height: 40,
    elevation: 4,
  },
  TextConnect: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default RegFaceIDScreen;
