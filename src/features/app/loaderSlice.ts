import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store';

export interface LoaderState {
 show : boolean
}

const initialState: LoaderState = {
  show: false,
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader: (state) => {
     
      state.show = true ;
    },
    hideLoader: (state) => {
      state.show = false ;
    },
  
  },
})


export const { showLoader , hideLoader } = loaderSlice.actions;
export const getLoaderState = (state: RootState): boolean => state.loader.show;

export default loaderSlice.reducer;