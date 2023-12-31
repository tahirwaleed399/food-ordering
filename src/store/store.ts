import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/app/appSlice';
import loaderReducer from '../features/app/loaderSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    loader: loaderReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
