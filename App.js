/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { Platform, StyleSheet, Image, View, Button } from 'react-native';
type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />

        <Button
          onPress={this.takePicture=this.takePicture.bind(this)}
          title="Camera"
          color="#841584" />
        <Image source={{uri: 'file:///storage/emulated/0/Sample/image/qkpOyUaRla.jpg'}}/>
      </View>
    );
  }
  takePicture = async function () {
    console.log(this.camera);
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      this.setState({
        uri:data.uri
        
      })
    }
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});