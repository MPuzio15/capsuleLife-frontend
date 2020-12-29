import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import logo from '../assets/images/logo.png';

const { width } = Dimensions.get('window');

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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: width,
        height: 300,
        borderRadius: width / 2,
    },
});
