import React, {useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import {ImagePickerHeader} from './Components/ImagePickerHeader';
import {ImagePickerModal} from './Components/ImagePickerModal';
import {ImagePickerAvatar} from './Components/ImagePickerAvatar';

const UploadFaceImgScreen = () => {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 0, //allow any number of files
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      cameraType: 'front',
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  for (let i = 0; i < 3; i++) {
    const uri = pickerResponse?.assets && pickerResponse.assets[i].uri;
  }

  return (
    <View style={styles.screen}>
      <ImagePickerHeader />
      <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f2fC',
  },
});

export default UploadFaceImgScreen;
