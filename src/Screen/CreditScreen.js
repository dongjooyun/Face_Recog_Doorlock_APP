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

const CreditScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <View style={styles.content}>
          <Image
            style={styles.ImageLogo}
            source={require('../../assets/logo_128.png')}
            //style={{width: wp(30), resizeMode: 'contain'}}
          />
        </View>
        <View style={styles.appTitleArea}>
          <Text style={styles.TextTitle}>AiKHUlock</Text>
        </View>
      </View>
      <View style={styles.infoArea}>
        <View style={styles.subjectArea}>
          <Text style={styles.TextSubj}>Fall, 2021</Text>
          <Text style={styles.TextSubj}>New Technology Project 2</Text>
          <Text style={styles.TextSubj}>B조_AiKHUlock</Text>
        </View>
        <View style={styles.teamArea}>
          <Text style={styles.TextTeam}>Nyugen Dang Dai</Text>
          <Text style={styles.TextTeam}>박권수</Text>
          <Text style={styles.TextTeam}>윤동주</Text>
          <Text style={styles.TextTeam}>정지은</Text>
        </View>
      </View>
      <View style={styles.endArea}>
        <View style={styles.copyrightArea}>
          <Text style={styles.TextCopy}>ⓒ2021 AiKHUlock</Text>
        </View>
        <View style={styles.EndingArea}>
          <Text style={styles.TextEnding}>Thank you for listening</Text>
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
  titleArea: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    marginBottom: 50,
  },
  ImageLogo: {
    width: 32,
    height: 32,
  },
  TextAppArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  TextTitle: {
    marginTop: -60,
    color: '#4282EF',
    fontSize: 40,
    fontFamily: 'Coiny-Regular',
  },
  infoArea: {
    marginTop: 30,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectArea: {
    marginTop: -150,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextSubj: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 40,
  },
  teamArea: {
    marginBottom: -130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextTeam: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 40,
  },
  endArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyrightArea: {
    marginBottom: 20,
  },
  TextCopy: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  EndingArea: {marginBottom: 5},
  TextEnding: {
    //marginTop: -60,
    color: '#4282EF',
    fontSize: 24,
    fontFamily: 'Coiny-Regular',
  },
});
export default CreditScreen;
