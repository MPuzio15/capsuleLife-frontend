import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import itemSlice from './itemSlice';
import deleteListSlice from './deleteListSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['items'],
};
const reducer = combineReducers({
  items: itemSlice.reducer,
  deleteList: deleteListSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export const itemsActions = itemSlice.actions;
export const deleteListActions = deleteListSlice.actions;
