import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import deleteIcon from '../../assets/icons/delete.png';
import addIcon from '../../assets/icons/add.png';
import {connect} from 'react-redux';
import {deleteItem} from '../../utils/dataAPI';
import {deleteListActions} from '../../store';

const TopHeader = ({deleteList, setDeleteListEmpty}) => {
  console.log('deleteList: ', deleteList);
  const handleDeleteAll = () => {
    deleteList.forEach((item) => {
      console.log(item.id);
      deleteItem(item.id);
    })(setDeleteListEmpty());
    console.log(deleteList);
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleDeleteAll}>
        <Image source={deleteIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={addIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
const mapState = (state) => ({
  deleteList: state.deleteList,
});
const mapDispatch = (dispatch) => ({
  setDeleteListEmpty: () => dispatch(deleteListActions.setDeleteListEmpty()),
});

export default connect(mapState, mapDispatch)(TopHeader);
