import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import logo from '../assets/images/logo.png';

const {width} = Dimensions.get('window');

const LoadingScreen = () => {
  return (
    <View style={styles.mainScreen}>
      <Image source={logo} style={styles.img} resizeMode="contain" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  mainScreen: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97936E',
  },
  img: {
    width: width,
    height: 300,
    borderRadius: width / 2,
  },
});
