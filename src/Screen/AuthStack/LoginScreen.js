import React, {useState, createRef} from 'react';

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
//import Loader from '../Components/Loader';
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
  KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const LoginScreen = ({navigation}) => {
  const preURL = '123';
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  // const setUseridStorage = async (stu_id) => {
  //   try {
  //     await AsyncStorage.setItem('user_id', stu_id);
  //   } catch (e) {
  //     // read error
  //   }
  //   console.log('Done.');
  // };

  /*async function setUseridStorage(stu_id) {
    await AsyncStorage.setItem('user_id', stu_id);
    console.log('Done.');
  }*/

  const handleSubmitPress = () => {
    setErrortext('');
    // if (!userId) {
    //   Alert.alert('Missing ID input');
    //   return;
    // }
    // if (!userPassword) {
    //   Alert.alert('Missing PW input');
    //   return;
    // }

    setLoading(true);
    let dataToSend = {stu_id: userId, stu_pw: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    // console.log(formBody);

    fetch(preURL.preURL + '/api/user/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Definition
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        // console.log(responseJson);
        // If server response message same as Data Matched
        if (true /*responseJson.status === 'success'*/) {
          // const saveUserid = async () => {
          //   await AsyncStorage.setItem('user_id', responseJson.data.stu_id);
          //   console.log('done save user_id' + AsyncStorage.getItem('user_id'));
          // };
          // saveUserid();
          AsyncStorage.setItem('user_id', responseJson.data.stu_id);
          setLoading(false);
          navigation.replace('MainTab');
        } else {
          setErrortext('Please check your ID or PW');
          setLoading(false);

          console.log('Please check your ID or PW');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoiding}>
        <View style={styles.topArea}>
          <View style={styles.titleArea}>
            <Image
              style={styles.ImageLogo}
              source={require('../../../assets/logo_128.png')}
            />
          </View>
          <View style={styles.TextAppArea}>
            <Text style={styles.TextTitle}>AiKHUlock</Text>
            <Text style={styles.TextIntro}>KHU Facial Recognition App</Text>
          </View>
        </View>
        <TextInput
          style={styles.textFormTop}
          placeholder={'ID'}
          onChangeText={userId => setUserId(userId)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.textFormBottom}
          onChangeText={userPassword => setUserPassword(userPassword)}
          secureTextEntry={true}
          placeholder={'Password'}
          returnKeyType="next"
          keyboardType="default"
          ref={passwordInputRef}
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
        />
        {errortext !== '' ? (
          <Text style={styles.TextValidation}> {errortext}</Text>
        ) : null}

        <View style={styles.BtnArea}>
          <View style={styles.loginBtnArea}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate('Main')}
              activeOpacity={0.6}>
              <Text style={styles.TextLogin}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.registerBtnArea}>
            <TouchableOpacity
              style={styles.registerBtn}
              onPress={() => navigation.navigate('Register')}
              activeOpacity={0.6}>
              <Text style={styles.TextReg}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  keyboardAvoiding: {
    flex: 1,
  },
  topArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ImageLogo: {
    width: 32,
    height: 32,
    marginTop: 150,
  },
  TextAppArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  TextTitle: {
    marginTop: -50,
    color: '#4282EF',
    fontSize: 40,
    fontFamily: 'Coiny-Regular',
  },
  TextIntro: {
    color: 'black',
    fontSize: 15,
    marginTop: -5,
  },
  TextValidation: {
    color: 'red',
  },

  textFormTop: {
    borderWidth: 1,
    borderBottomWidth: 0.5,
    borderColor: '#E0E0E0',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    width: '90%',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 16,
    marginBottom: 10,
    backgroundColor: '#E0E0E0',
  },
  textFormBottom: {
    borderWidth: 1,
    borderBottomWidth: 0.5,
    borderColor: '#E0E0E0',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    width: '90%',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 20,
    marginRight: 16,
    marginBottom: 0,
    backgroundColor: '#E0E0E0',
  },
  BtnArea: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  loginBtnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginBtn: {
    width: '90%',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72DFC5',
    height: 40,
    elevation: 4,
  },
  TextLogin: {color: 'white', fontSize: 14, fontWeight: 'bold'},
  registerBtnArea: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  registerBtn: {
    width: '90%',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72DFC5',
    height: 40,
    elevation: 4,
  },
  TextReg: {color: 'white', fontSize: 14, fontWeight: 'bold'},
});

export default LoginScreen;
