import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import UserReducer from './User/UserSlice';
import { MMKVStorage } from './Storage';

// Redux Persist configuration
const config: PersistConfig<any> = {
  key: 'root',
  storage: MMKVStorage,
  blacklist: [],
  debug: true, // Enable debug logs
};

// Combine reducers and wrap them with persistReducer
const rootReducer = combineReducers({
  UserList: UserReducer,
});
const persistedReducer = persistReducer<RootState>(config, rootReducer);


// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Persister
export const persister = persistStore(store);

// Export store and types
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
