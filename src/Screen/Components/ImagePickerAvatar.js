import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';

import {images} from '../../../assets';

export function ImagePickerAvatar({uri, onPress}) {
  return (
    <ImageBackground
      style={styles.imageBackground}
      //source={images.whatsappBackground}
    >
      <View style={styles.avatar}>
        <Image
          style={styles.avatarImage}
          source={uri ? {uri} : images.avatar}
        />
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
          <Image style={styles.addButtonIcon} source={images.addButton} />
        </TouchableOpacity>
        <Text style={styles.usernameText}>@djyun</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  avatar: {
    alignItems: 'center',
    marginTop: '40%',
  },
  avatarImage: {
    height: 260,
    width: 260,
    overflow: 'hidden',
    borderColor: '#4282EF',
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
  addButton: {
    height: 54,
    width: 54,
    backgroundColor: '#4282EF',
    borderRadius: 50,
    position: 'absolute',
    right: 104,
    bottom: 40,
  },
  addButtonIcon: {
    height: 54,
    width: 54,
  },
  usernameText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 12,
  },
});

//export default ImagePickerAvatar;
