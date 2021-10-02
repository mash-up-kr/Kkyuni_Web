import { createSlice } from '@reduxjs/toolkit';

import Diary from '@src/types/Diary';

interface DiaryState {
  diary?: Diary;
}

const initialState: DiaryState = {
  diary: undefined,
};

const diaryReducer = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    //
  },
});

export default diaryReducer.reducer;
