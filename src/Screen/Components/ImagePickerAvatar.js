import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import {images} from '../../../assets';

export function ImagePickerAvatar({uri, uri1, uri2, onPress}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <Image
          style={styles.avatarImage}
          source={uri ? {uri} : images.avatar}
        />
        <Image
          style={styles.avatarImage}
          source={uri1 ? {uri2} : images.avatar}
        />
        <Image
          style={styles.avatarImage}
          source={uri2 ? {uri2} : images.avatar}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#4282EF',
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 200,
  },
  avatar: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  avatarImage: {
    height: 200,
    width: 200,
    overflow: 'hidden',
    borderColor: '#72DFC5',
    borderWidth: 4,
    borderRadius: 260 / 2,
    margin: 20,
  },
  // addButton: {
  //   height: 54,
  //   width: 54,
  //   backgroundColor: '#4282EF',
  //   borderRadius: 50,
  //   position: 'absolute',
  //   right: 104,
  //   bottom: 40,
  // },
  // addButtonIcon: {
  //   height: 54,
  //   width: 54,
  // },
  // usernameText: {
  //   fontSize: 24,
  //   fontWeight: '700',
  //   color: '#ffffff',
  //   marginTop: 12,
  // },
});

//export default ImagePickerAvatar;
