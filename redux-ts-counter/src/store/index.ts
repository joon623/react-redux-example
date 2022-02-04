import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counter from './counter';

// localStorage에 저장하고 싶으면 import storage from 'redux-persist/lib/storage
// session Storage에 저장하고 싶으면 import storageSession from 'redux-persist/lib/storage/session

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whiteList: [''],
};

const rootReducer = combineReducers({
  counter,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
