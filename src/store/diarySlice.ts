import {
  ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { convertResponseToDiary, getDiaryByDate, GetDiaryRequestType } from '@src/api/diaryApi';

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
    try {
      const res = await getDiaryByDate(request);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
);

const diaryReducer = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    setDiary: (state, { payload: { diary } }: PayloadAction<DiaryState>) => {
      state.diary = diary;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<DiaryState>) => {
    builder.addCase(fetchDiary.fulfilled, (state, {
      payload,
    }) => {
      state.diary = payload.title ? convertResponseToDiary(payload) : undefined;
    });
  },
});

export const { setDiary } = diaryReducer.actions;
export default diaryReducer.reducer;
