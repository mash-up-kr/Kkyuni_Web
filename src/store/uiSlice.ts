import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isDark?: boolean;
  isLoading?: boolean;
}

const initialState: UIState = {
  isDark: false,
  isLoading: false,
};

const uiReducer = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsDark: (state, { payload: { isDark } }: PayloadAction<UIState>) => {
      state.isDark = isDark;
    },
    setLoading: (state, { payload: { isLoading } }: PayloadAction<UIState>) => {
      state.isLoading = isLoading;
    },
  },
});

export const { setIsDark, setLoading } = uiReducer.actions;
export default uiReducer.reducer;
