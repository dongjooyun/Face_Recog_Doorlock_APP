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

const RegisterScreen = ({navigation, props}) => {
  const preURL = '123';

  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  // const [userPasswordchk, /*setUserPasswordchk*] = useState('');
  const [loading, setLoading] = useState(false);
  //const [errortext, setErrortext] = useState('');
  const [errortext2, setErrortext2] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const userPhoto = '../../../assets/frlIf.png';

  const idInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    //setErrortext('');

    //Show Loader
    setLoading(true);

    var dataToSend = {
      stu_id: userId,
      stu_pw: userPassword,
      stu_photo: userPhoto,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch(preURL.preURL + '/api/user/register', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading(false);
        setErrortext2('');
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log('Registration Successful. Please Login to proceed');
        } else if (responseJson.status === 'duplicate') {
          setErrortext2('이미 존재하는 아이디입니다.');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  if (isRegistraionSuccess) {
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
              source={require('../../../assets/success.png')}
              style={{
                height: 32,
                width: 32,
                opacity: 0.5,
                resizeMode: 'contain',
                alignSelf: 'center',
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
                fontFamily: 'Coiny-Regular',
                fontSize: 15,
                marginBottom: 30,
              }}>
              Registration Success
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
                onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  CLICK to SIGN IN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.titleArea}>
          {
            <View style={styles.content}>
              <Image
                style={styles.ImageLogo}
                source={require('../../../assets/logo_128.png')}
              />
            </View>
          }
        </View>
        <View style={styles.TextAppArea}>
          <Text style={styles.TextTitle}>AiKHUlock</Text>
          <Text style={styles.TextIntro}>KHU Facial Recognition App</Text>
        </View>
      </View>
      <View style={styles.formArea}>
        <TextInput
          style={styles.textFormTop}
          placeholder={'ID(5자 이상, 영문, 숫자)'}
          onChangeText={userId => setUserId(userId)}
          ref={idInputRef}
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.textFormBottom}
          secureTextEntry={true}
          placeholder={'Password(8자 이상)'}
          onChangeText={UserPassword => setUserPassword(UserPassword)}
          ref={passwordInputRef}
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>

      <View style={{flex: 0.7, justifyContent: 'center'}}>
        {errortext2 !== '' ? (
          <Text style={styles.TextValidation}>{errortext2}</Text>
        ) : null}
      </View>

      <View style={{flex: 0.75}}>
        <View style={styles.btnArea}>
          <TouchableOpacity
            style={styles.btn}
            //onPress={handleSubmitButton}
            onPress={() => navigation.navigate('Auth', {screen: 'Loading'})}
            activeOpacity={0.6}>
            <Text style={styles.TextBtn}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 3}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  topArea: {
    flex: 3.3,
  },
  titleArea: {
    flex: 2.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    marginBottom: -90,
  },
  ImageLogo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  TextAppArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  alertArea: {},
  TextTitle: {
    marginTop: -60,
    color: '#4282EF',
    fontSize: 40,
    fontFamily: 'Coiny-Regular',
  },
  TextIntro: {
    color: 'black',
    fontSize: 15,
  },
  TextValidation: {
    color: 'red',
  },
  formArea: {
    flex: 1.5,
    justifyContent: 'center',
    marginTop: 5,
  },
  formArea2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 60,
    marginLeft: 20,
    marginRight: 16,
    marginBottom: 20,
    backgroundColor: 'white',
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
    marginBottom: 20,
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
  TextBtn: {color: 'white', fontSize: 14, fontWeight: 'bold'},
  inputIOS: {
    borderWidth: 2,
    borderTopWidth: 1,
    borderColor: 'black',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default RegisterScreen;
