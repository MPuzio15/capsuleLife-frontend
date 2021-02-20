import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {connect} from 'react-redux';

import MainScreen from './MainScreen';
import LoadingScreen from './LoadingScreen';

import {fetchData} from '../utils/dataAPI';
import {deleteListActions, itemsActions} from '../store';

const AppScreen = ({items, setItemsList, setDeleteListEmpty, deleteList}) => {
  const [isLoading, setIsLoading] = useState(true);

  const getItemsFromAPI = async () => {
    const itemsToSet = await fetchData();
    setItemsList(itemsToSet);
    setIsLoading(false);
  };
  useEffect(() => {
    if (deleteList.length === 0) getItemsFromAPI();
  }, [deleteList]);

  return (
    <SafeAreaView style={styles.container}>
      {!isLoading ? <MainScreen data={items} /> : <LoadingScreen />}
    </SafeAreaView>
  );
};

const mapState = (state) => ({
  items: state.items,
  deleteList: state.deleteList,
});

const mapDispatch = (dispatch) => ({
  setItemsList: (data) => dispatch(itemsActions.setItemsList(data)),
  setDeleteListEmpty: (list) =>
    dispatch(deleteListActions.setDeleteListEmpty(list)),
});

export default connect(mapState, mapDispatch)(AppScreen);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
  },
});
