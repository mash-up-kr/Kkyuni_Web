import axios, { AxiosResponse } from 'axios';

import Diary from '@src/types/Diary';
import { API_URL } from './common';

export type GetDiaryRequestType = {
  date: string;
  token: string;
}

export type GetDiaryResponseType = {
  isSuccess: boolean;
  diary: Diary;
}

export function getDiaryByDate(
  { date, token }: GetDiaryRequestType,
): Promise<AxiosResponse<GetDiaryResponseType>> {
  return axios.get(`${API_URL}/api/v1/diary/${date}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
    withCredentials: true,
  });
}
