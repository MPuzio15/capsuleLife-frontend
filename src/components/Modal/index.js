import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

const AddModal = ({isModalVisible, setIsModalVisible}) => {
  const [inputValue, setInputValue] = useState('Dodaj przedmiot...');
  return (
    <View style={styles.centeredView}>
      <Modal transparent={true}>
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => setIsModalVisible(false)}>
          <View style={styles.modalView}>
            <Text style={styles.text}>Dodaj przedmiot</Text>
            <TextInput
              style={styles.inputContainer}
              onChangeText={(text) => setInputValue(text)}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default AddModal;
