import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createStore } from './createStore';

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
