// hooks.ts
import { TypedUseSelectorHook, useDispatch as reduxUseDispatch, useSelector as reduxUseSelector } from 'react-redux';
import type { RootState } from '../store/store';


export const useAppDispatch = () => reduxUseDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = reduxUseSelector;
