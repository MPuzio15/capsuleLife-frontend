import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {connect} from 'react-redux';

import MainScreen from './MainScreen';
import LoadingScreen from './LoadingScreen';

import {getItems} from '../utils/dataAPI';
import {itemsActions} from '../store';

const AppScreen = ({items, setItemsList}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const itemsToSet = [];
      const list = await getItems();
      list.forEach((item) => {
        const task = {
          ...item,
          isCompleted: false,
        };
        itemsToSet.push(task);
      });
      setItemsList(itemsToSet);
      setIsLoading(false);
    };
    fetchData();
  }, [setItemsList]);

  return (
    <SafeAreaView style={styles.container}>
      {!isLoading ? <MainScreen data={items} /> : <LoadingScreen />}
    </SafeAreaView>
  );
};

const mapState = (state) => ({
  items: state.items,
});

const mapDispatch = (dispatch) => ({
  setItemsList: (data) => dispatch(itemsActions.setItemsList(data)),
});

export default connect(mapState, mapDispatch)(AppScreen);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
  },
});
