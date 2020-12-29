import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TopHeader = ({ openDrawer, closeDrawer }) => {
    const openAddDrawer = () => openDrawer();

    return (
        <View style={[styles.container]}>
            <Text style={styles.title}>Live a capsule life</Text>
        </View>
    );
};

export default TopHeader;
