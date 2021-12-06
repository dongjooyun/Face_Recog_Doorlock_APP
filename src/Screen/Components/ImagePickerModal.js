import React from 'react';
import {SafeAreaView, Text, Image, Pressable, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import {images} from '../../../assets';

export function ImagePickerModal({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
      <SafeAreaView style={styles.buttons}>
        <Pressable style={styles.button} onPress={onImageLibraryPress}>
          <Image style={styles.ImgButtonIcon} source={images.image} />
          <Text style={styles.buttonGalleryText}>Gallery</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onCameraPress}>
          <Image style={styles.CamButtonIcon} source={images.camera} />
          <Text style={styles.buttonCameraText}>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  buttonIcon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  buttons: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImgButtonIcon: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginRight: -5,
  },
  CamButtonIcon: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: -5,
  },
  buttonGalleryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4282EF',
    marginBottom: 10,
    marginRight: -5,
  },
  buttonCameraText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4282EF',
    marginBottom: 10,
    marginLeft: -5,
  },
});
//export default ImagePickerModal;
