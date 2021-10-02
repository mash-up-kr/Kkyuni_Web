import axios, { AxiosResponse } from "axios";

import Diary from '@src/types/Diary';
import { API_URL } from './common';

export interface GetDiaryRequestType {
  date: string;
  token: string;
}

interface GetDiaryResponseType {
  success: boolean;
  diary: Diary;
}

export function getDiary(
  data: GetDiaryRequestType
): Promise<AxiosResponse<GetDiaryResponseType>> {
  return axios.post(`${API_URL}/api/v1/diary/${data.date}/list`, data);
}
