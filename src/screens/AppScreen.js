import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import MainScreen from './MainScreen';
import LoadingScreen from './LoadingScreen';

import { getItems } from '../utils/dataAPI';
import { itemsActions } from '../store';

const AppScreen = ({ items, setItemsList }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const list = await getItems();
            console.log(3333333, list)
            setItemsList(list);
            setIsLoading(false);
        };
        fetchData();
    }, [setItemsList]);
    console.log(444444444444, items)
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
