import axios, { AxiosResponse } from 'axios';

import Diary from '@src/types/Diary';

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
  return axios.get(`https://api.gyunny.site/api/v1/diary/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
}
