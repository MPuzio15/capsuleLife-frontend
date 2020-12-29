import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import doneIcon from '../../assets/icons/done.png'

const statusBarHeight = Platform.OS === 'ios' ? 20 : getStatusBarHeight();
const { width, height } = Dimensions.get('window');
const CARD_HEIGHT =
  (height - 300 - 50 - statusBarHeight + 20) / 4;

const Item = ({ task, index }) => {
  const { id, name, publisher } = task;
  console.log('new name', name)
  console.log('publisher', publisher)
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.number}>{(id).toString()}</Text>
      <View>
        <>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
        </>
      </View>
      <TouchableOpacity>
        <Image
          source={doneIcon}
          style={styles.icon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    marginTop: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: 'gray',
    tintColor: 'green',
    paddingLeft: 10,
  },
  name: {
    fontSize: 16,
  },
  number: {
    fontSize: 16,
  },
});
