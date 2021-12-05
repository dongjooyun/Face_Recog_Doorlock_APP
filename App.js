import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
//import SplashScreen from 'react-native-splash-screen';
// import Orientation from 'react-native-orientation';

import React, {useEffect, useLayoutEffect} from 'react';
// import FlashMessage from 'react-native-flash-message';

import {Image, StyleSheet} from 'react-native';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';

// import Icon from 'react-native-vector-icons/dist/Ionicons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import SplashScreen from './src/Screen/SplashScreen';
import LoginScreen from './src/Screen/AuthStack/LoginScreen';
import LoginReadyScreen from './src/Screen/AuthStack/LoginReadyScreen';
import RegisterScreen from './src/Screen/AuthStack/RegisterScreen';

import LoadingScreen from './src/Screen/Components/LoadingScreen';
import LoadingFaceScreen from './src/Screen/Components/LoadingFaceScreen';
import LoadingRPScreen from './src/Screen/Components/LoadingRPScreen';

import MainScreen from './src/Screen/MainScreen';
import UserSettingScreen from './src/Screen/UserSettingScreen';

import RegFaceIDScreen from './src/Screen/RegFaceIDScreen';
import UploadFaceImgScreen from './src/Screen/UploadFaceImgScreen';
import FaceImgReadyScreen from './src/Screen/FaceImgReadyScreen';

import ConnectRPScreen from './src/Screen/ConnectRPScreen';
import SeachRaspberryPi from './src/Screen/SeachRaspberryPi';
import RP_ReadyScreen from './src/Screen/RP_ReadyScreen';

import DoorlockLogScreen from './src/Screen/DoorlockLogScreen';

import CreditScreen from './src/Screen/CreditScreen';

// import TestScreen from './Screen/TestStackScreens/TestScreen';
// import TestCreateScreen from './Screen/TestStackScreens/TestCreateScreen';
// import TestReadScreen from './Screen/TestStackScreens/TestReadScreen';
// import TestReadEachScreen from './Screen/TestStackScreens/TestReadEachScreen';
// import ProfileScreen from './Screen/SettingStackScreens/ProfileScreen';
// import ProfileEditScreen from './Screen/SettingStackScreens/ProfileEditScreen';

// import BackBtn from './src/Screen/Components/BackBtn';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const TestStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();

//뒤로 가기 버튼 Image 컴포넌트
// function BackBtn() {
//   return (
//     <Image
//       source={require('./src/back-btn.png')}
//       style={{marginLeft: 10, width: 22, height: 22}}
//     />
//   );
// }

// const HomeStackScreen = ({navigation, route}) => {
//   const getrouteName = async () => {
//     const routeName = await getFocusedRouteNameFromRoute(route);

//     if (routeName === 'Home' || routeName === undefined) {
//       navigation.setOptions({tabBarVisible: true});
//     } else {
//       navigation.setOptions({tabBarVisible: false});
//     }
//     return routeName;
//   };

//   useLayoutEffect(() => {}, [getrouteName, navigation, route]);

//   return (
//     <Stack.Navigator>
//       <HomeStack.Screen
//         name="Home"
//         options={({}) => ({
//           headerTitle: '',
//           headerLeft: () => (
//             <Image
//               style={{width: 256, height: 256, resizeMode: 'contain'}}
//               source={require('./assets/logo_512.png')}
//             />
//           ),
//           tabBarVisible: true,
//         })}
//         component={HomeScreen}
//       />
//     </Stack.Navigator>
//   );
// };

// const SettingStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <SettingStack.Screen name="Profile" component={ProfileScreen} />
//       <SettingStack.Screen name="ProfileEdit" component={ProfileEditScreen} />
//     </Stack.Navigator>
//   );
// };

// const TestStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       {/* <TestStack.Screen name="Test" component={TestScreen} /> */}
//       <TestStack.Screen name="TestCreate" component={TestCreateScreen} />
//       <TestStack.Screen name="TestRead" component={TestReadScreen} />
//       <TestStack.Screen name="TestReadEach" component={TestReadEachScreen} />
//     </Stack.Navigator>
//   );
// };

// const MainTabScreen = ({navigation, route}) => {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeStack"
//       // eslint-disable-next-line no-shadow
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           if (route.name === 'TestStack') {
//             iconName = focused ? 'document' : 'document-outline';
//           } else if (route.name === 'HomeStack') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'SettingStack') {
//             iconName = focused ? 'person-circle' : 'person-circle-outline';
//           }

//           // You can return any component that you like here!
//           // return <Icon name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'black',
//         inactiveTintColor: 'lightgray',
//         showLabel: false,
//       }}>
//       <Tab.Screen name="TestStack" component={TestStackScreen} />
//       <Tab.Screen name="HomeStack" component={HomeStackScreen} />
//       <Tab.Screen name="SettingStack" component={SettingStackScreen} />
//     </Tab.Navigator>
//   );
// };

// Stack Navigator for Login and Register and Logout Screen
const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginReady"
        component={LoginReadyScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainHome"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const Menus = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={UserSettingScreen}
        options={{
          title: 'User Settings',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Log"
        component={DoorlockLogScreen}
        options={{
          title: 'Doorlock Logs',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Credit"
        component={CreditScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const FaceID = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RegFaceID"
        component={RegFaceIDScreen}
        options={{title: 'Register FaceID', headerBackTitleVisible: false}}
      />
      <Stack.Screen
        name="UploadFaceImg"
        component={UploadFaceImgScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Loading"
        component={LoadingFaceScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FaceReady"
        component={FaceImgReadyScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const RaspberryPi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ConnectRP"
        component={ConnectRPScreen}
        options={{
          title: 'Connect to Raspberry Pi',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="SearchRP"
        component={SeachRaspberryPi}
        options={{
          title: 'Search Raspberry Pi',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Loading"
        component={LoadingRPScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RPReady"
        component={RP_ReadyScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    // Orientation.lockToLandscape();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Home}
          options={{headerShown: false}}
        />
        {/* Menus Navigator: Include Setting, Logs, and Credits */}
        <Stack.Screen
          name="Menus"
          component={Menus}
          options={{headerShown: false}}
        />
        {/* FaceID Navigator: Include Image select and Loading*/}
        <Stack.Screen
          name="FaceID"
          component={FaceID}
          options={{headerShown: false}}
        />
        {/* RP Navigator: Include RP connect and Loading*/}
        <Stack.Screen
          name="RaspberryPi"
          component={RaspberryPi}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {/* <FlashMessage position="bottom" /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
