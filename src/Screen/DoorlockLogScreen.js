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
  SafeAreaView,
  ScrollView,
  //KeyboardAvoidingView,
} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {images} from '../../assets';

const DoorlockLogScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {
          <View style={styles.RPArea}>
            <View style={styles.settingWarnTitleArea}>
              <Text style={styles.TextSettingRP}>2021-12-07 17:46:30</Text>
            </View>
            <View style={styles.RPInfoArea}>
              <View style={styles.settingUnAuthArea}>
                <Text style={styles.TextSettingRP}>Unauthorized Person</Text>
              </View>
              {
                //안면 이미지
                <Image style={styles.UnAuthImage} source={images.unauth} />
              }
            </View>
            <View style={styles.settingWarnTitleArea}>
              <Text style={styles.TextSettingRP}>2021-12-07 17:34:56</Text>
            </View>
            <View style={styles.RPInfoArea}>
              <View style={styles.settingUnAuthArea}>
                <Text style={styles.TextSettingRP}>Unauthorized Person</Text>
              </View>
              {
                //안면 이미지
                <Image style={styles.UnAuthImage1} source={images.unauth1} />
              }
            </View>
          </View>
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  FaceArea: {flex: 1.5},
  RPArea: {flex: 1},

  settingTitleArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4282EF',
    height: 60,
    width: '100%',
  },
  settingWarnTitleArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C9322B',
    height: 60,
    width: '100%',
  },
  settingAuthArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4282EF',
    height: 60,
    width: '80%',
  },
  settingUnAuthArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C9322B',
    height: 60,
    width: '80%',
  },
  AuthImage: {
    height: 200,
    width: 250,
    overflow: 'hidden',
    borderColor: '#4282EF',
    borderWidth: 4,
    borderRadius: 6,
    margin: 20,
  },
  UnAuthImage: {
    height: 200,
    width: 250,
    overflow: 'hidden',
    borderColor: '#C9322B',
    borderWidth: 4,
    borderRadius: 6,
    margin: 20,
  },
  UnAuthImage1: {
    height: 200,
    width: 250,
    overflow: 'hidden',
    borderColor: '#C9322B',
    borderWidth: 4,
    borderRadius: 6,
    margin: 20,
  },
  TextSettingFace: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  FaceInfoArea: {
    //flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    //marginBottom: 20,
    marginLeft: 10,
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
    marginBottom: 30,
    marginLeft: -10,
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
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 40,
    marginLeft: -10,
    marginTop: -20,
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
export default DoorlockLogScreen;
