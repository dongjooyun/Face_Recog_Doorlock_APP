import React, {useState, createRef, Component, useCallback} from 'react';
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

import * as ImagePicker from 'react-native-image-picker';
import {ImagePickerModal} from './Components/ImagePickerModal';
import {ImagePickerAvatar} from './Components/ImagePickerAvatar';

const RegFaceIDScreen = ({navigation, props}) => {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 0, //0: allow any number of files
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      cameraType: 'front',
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);
  //for (let i = 0; i < 3; i++) {
  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
  //}
  const uri1 = pickerResponse?.assets && pickerResponse.assets[1].uri;
  const uri2 = pickerResponse?.assets && pickerResponse.assets[2].uri;

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
          uri={uri}
          uri1={uri1}
          uri2={uri2}
          onPress={
            () => setVisible(true) //navigation.navigate('FaceID', {screen: 'UploadFaceImg'})
          }
          activeOpacity={0.6}>
          <Text style={styles.TextRegImgBtn}>Upload Facial Images</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ImgInfoArea}>
        <View style={styles.InfoArea}>
          <View style={styles.TextNumOfImgArea}>
            <Text style={styles.TextInfoTitle}>Uploaded Images</Text>
          </View>
          <View style={styles.TextNumOfImgArea}>
            <Text style={styles.TextInfo}>0</Text>
          </View>
        </View>
      </View>
      <ImagePickerAvatar
        uri={uri}
        uri1={uri1}
        uri2={uri2}
        onPress={() => setVisible(true)}
      />
      <View style={styles.connectBtnArea}>
        <TouchableOpacity
          style={styles.connectBtn}
          onPress={() => navigation.navigate('FaceID', {screen: 'Loading'})}
          activeOpacity={0.6}>
          <Text style={styles.TextConnect}>Create FaceID</Text>
        </TouchableOpacity>
      </View>
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    backgroundColor: '#f2f2fC',
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
    marginBottom: 30,
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
