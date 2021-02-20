import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import deleteIcon from '../../assets/icons/delete.png';
import addIcon from '../../assets/icons/add.png';
import {connect} from 'react-redux';
import {deleteItem, fetchData} from '../../utils/dataAPI';
import {deleteListActions, itemsActions} from '../../store';

const TopHeader = ({deleteList, setDeleteListEmpty, items, setItemsList}) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  console.log('deleteList: ', deleteList);

  const handleDeleteAll = async () => {
    try {
      deleteList.forEach(async (item, index) => {
        const id = item.id.toString();
        const res = await deleteItem(id);
        if (res.status !== 200) throw new Error('Delete error occured');
      });
      setDeleteListEmpty();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      {isModalVisible && (
        <Modal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
      <View style={[styles.container]}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handleDeleteAll}>
          <Image source={deleteIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setIsModalVisible(true)}>
          <Image source={addIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </>
  );
};
const mapState = (state) => ({
  deleteList: state.deleteList,
  items: state.items,
});
const mapDispatch = (dispatch) => ({
  setDeleteListEmpty: () => dispatch(deleteListActions.setDeleteListEmpty()),
  setItemsList: (data) => dispatch(itemsActions.setItemsList(data)),
});

export default connect(mapState, mapDispatch)(TopHeader);
