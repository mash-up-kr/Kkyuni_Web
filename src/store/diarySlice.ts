import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDiary, GetDiaryRequestType } from '@src/api/diaryApi';

import Diary from '@src/types/Diary';

interface DiaryState {
  diary?: Diary;
}

const initialState: DiaryState = {
  diary: undefined,
};

export const fetchDiary = createAsyncThunk(
  'diary/fetchById',
  async (request: GetDiaryRequestType) => {
    const res = await getDiary(request);
    return res.data;
  }
)

const diaryReducer = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    setDiary: (state, { payload: { diary } }: PayloadAction<DiaryState>) => {
      state.diary = diary;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<DiaryState>) => {
    builder.addCase(fetchDiary.fulfilled, (state, action) => {
      state.diary = action.payload.diary;
    });
  }
});

export default diaryReducer.reducer;
