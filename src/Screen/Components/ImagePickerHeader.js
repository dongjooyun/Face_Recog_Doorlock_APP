import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

export function ImagePickerHeader() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <Text style={styles.topBarTitleText}>Select Facial Images</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#4282EF',
  },
  topBar: {
    height: 50,
    backgroundColor: '#4282EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitleText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
//export default ImagePickerHeader;
