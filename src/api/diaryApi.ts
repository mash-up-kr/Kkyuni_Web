import axios, { AxiosResponse } from "axios";

import Diary from '@src/types/Diary';
import { API_URL } from './common';

export interface GetDiaryListRequestType {
  date: string;
  token: string;
}

interface GetDiaryListResponseType {
  success: boolean;
  diary: Diary;
}

export function getDiaryList(
  { date, token }: GetDiaryListRequestType
): Promise<AxiosResponse<GetDiaryListResponseType>> {
  return axios.get(`${API_URL}/api/v1/diary/${date}/list`, {
    headers: {
      token,
    }
  });
}
