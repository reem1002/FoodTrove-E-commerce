import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // استخدام localStorage
import rootReducer from './rootReducer'; // استيراد rootReducer الذي تم تعريفه

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer, // استخدمي persistedReducer هنا
});

const persistor = persistStore(store);

export { store, persistor };
