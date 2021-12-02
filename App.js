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
import LoginScreen from './src/Screen/LoginScreen';
import RegisterScreen from './src/Screen/RegisterScreen';
import HomeScreen from './src/Screen/HomeStackScreens/HomeScreen';

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

const HomeStackScreen = ({navigation, route}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getrouteName = async () => {
    const routeName = await getFocusedRouteNameFromRoute(route);

    if (routeName === 'Home' || routeName === undefined) {
      navigation.setOptions({tabBarVisible: true});
    } else {
      navigation.setOptions({tabBarVisible: false});
    }
    return routeName;
  };

  useLayoutEffect(() => {}, [getrouteName, navigation, route]);

  return (
    <Stack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={({}) => ({
          headerTitle: '',
          headerLeft: () => (
            <Image
              //style={{width: wp(33), height: hp(3.5), resizeMode: 'contain'}}
              source={require('./assets/logo_256.png')}
            />
          ),
          tabBarVisible: true,
        })}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

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
          title: '',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: '',
          headerBackTitleVisible: false,
        }}
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
        {/* <Stack.Screen
          name="MainTab"
          // options={({route}) => ({
          //   headerTitle: getHeaderTitle(route),
          // })}
          component={MainTabScreen}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
      {/* <FlashMessage position="bottom" /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
