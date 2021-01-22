import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import styles from './styles';
import completedIcon from '../../assets/icons/completedIcon.png';
import notCompletedIcon from '../../assets/icons/notCompletedIcon.png';
import {itemsActions, deleteListActions} from '../../store';

const statusBarHeight = Platform.OS === 'ios' ? 20 : getStatusBarHeight();
const {width, height} = Dimensions.get('window');

const Item = ({task, index, items, setCompleted, setItemToDelete}) => {
  const {id, name, publisher, isCompleted} = task;

  return (
    <TouchableOpacity style={styles.container}>
      <Text
        style={[
          styles.text,
          {
            textDecorationLine: isCompleted ? 'line-through' : 'none',
            color: isCompleted ? 'gray' : 'black',
          },
        ]}>{`${(index + 1).toString()}.   ${name}`}</Text>
      <TouchableOpacity
        onPress={() => {
          setCompleted(task.id);
          setItemToDelete(task);
        }}>
        <Image
          source={isCompleted ? completedIcon : notCompletedIcon}
          style={styles.icon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const mapState = (state) => ({
  items: state.items,
});

const mapDispatch = (dispatch) => ({
  setCompleted: (id) => dispatch(itemsActions.setCompleted(id)),
  setItemToDelete: (item) => {
    dispatch(deleteListActions.setItemToDelete(item));
  },
});

export default connect(mapState, mapDispatch)(Item);
