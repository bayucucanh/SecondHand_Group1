import { applyMiddleware, createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AllReducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const configPersist = persistReducer(persistConfig, AllReducers);

export const Store = createStore(configPersist, applyMiddleware(thunk, logger));
export const Persistor = persistStore(Store);
