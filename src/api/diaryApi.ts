import axios, { AxiosResponse } from 'axios';

import Diary from '@src/types/Diary';
import { API_URL } from './common';

export type GetDiaryRequestType = {
  diaryId: string;
}

export type GetDiaryResponseType = {
  isSuccess: boolean;
  diary: Diary;
}

export function getDiaryById(
  { diaryId }: GetDiaryRequestType,
): Promise<AxiosResponse<GetDiaryResponseType>> {
  return axios.get(`${API_URL}/api/v1/diary/${diaryId}`);
}
