import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

import uiReducer, { setLoading, setIsDark } from '@src/store/uiSlice';

const reducers = combineReducers({
  ui: uiReducer,
});

const store = configureStore({ reducer: reducers });

export default store;

export { setLoading, setIsDark };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useUiState = () => useSelector<RootState, RootState['ui']>((state) => state.ui);
