import { configureStore } from '@reduxjs/toolkit';
import { bookSearchListsApi } from '../services/bookSearchListsApi';

export const createStore = () => {
    const reducer = {  
      // APIs
      [bookSearchListsApi.reducerPath]: bookSearchListsApi.reducer,
    };
  
    const store = configureStore({
      reducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            bookSearchListsApi.middleware,
        ]),
    });
  
    return store;
  };
  