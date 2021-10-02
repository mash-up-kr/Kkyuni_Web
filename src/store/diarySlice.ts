import {
  ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { getDiaryById, GetDiaryRequestType, GetDiaryResponseType } from '@src/api/diaryApi';

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
    const res = await getDiaryById(request);
    return res.data;
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
      payload: {
        diary,
        isSuccess,
      },
    }: PayloadAction<GetDiaryResponseType>) => {
      state.diary = isSuccess ? diary : undefined;
    });
  },
});

export default diaryReducer.reducer;
