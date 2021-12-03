import React, {useState, createRef} from 'react';

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
import Loader from './Components/Loader';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  //ScrollView,
  Keyboard,
  //KeyboardAvoidingView,
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
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        // console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          // const saveUserid = async () => {
          //   await AsyncStorage.setItem('user_id', responseJson.data.stu_id);
          //   console.log('done save user_id' + AsyncStorage.getItem('user_id'));
          // };
          // saveUserid();
          AsyncStorage.setItem('user_id', responseJson.data.stu_id);
          setLoading(false);
          navigation.replace('MainTab');
        } else {
          setErrortext('아이디와 비밀번호를 다시 확인해주세요');
          setLoading(false);

          console.log('Please check your id or password');
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
      <Loader loading={loading} />
      <View style={styles.topArea}>
        <View style={styles.titleArea}>
          {
            <Image
              style={styles.ImageLogo}
              source={require('../../assets/logo_128.png')}
              //style={{width: wp(30), resizeMode: 'contain'}}
            />
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
          placeholder={'ID'}
          // eslint-disable-next-line no-shadow
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
          // eslint-disable-next-line no-shadow
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
      </View>
      <View style={{flex: 0.75}}>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={handleSubmitPress}>
            <Text style={{color: 'white'}}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.TextRegisterArea}>
        <Text
          style={styles.TextRegister}
          onPress={() => navigation.navigate('Register')}>
          SIGN UP
        </Text>
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
    flex: 2,
    //ent: 'bottom',
  },
  titleArea: {
    flex: 2.1,
    justifyContent: 'center',
    //flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ImageLogo: {
    width: 32,
    height: 32,
  },
  TextAppArea: {
    flex: 1.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  TextTitle: {
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
  TextRegisterArea: {
    flex: 0.5,
    alignItems: 'center',
  },
  TextRegister: {
    color: 'black',
    textDecorationLine: 'underline',
    justifyContent: 'center',
  },
  formArea: {
    justifyContent: 'center',
    // paddingTop: wp(10),
    flex: 1.5,
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
    marginBottom: 20,
    backgroundColor: '#E0E0E0',
  },
  btnArea: {
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    width: '100%',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
export default LoginScreen;
