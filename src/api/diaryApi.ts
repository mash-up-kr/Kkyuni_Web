import axios, { AxiosResponse } from 'axios';

import Diary, { DiaryType, Emotion } from '@src/types/Diary';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://api.gyunny.site' : '';

export type GetDiaryRequestType = {
  date: string;
  token: string;
}

export type GetDiaryResponseType = {
  content: string;
  diaryID: number;
  diaryType: string;
  latitude: string;
  longitude: string;
  musicPlayTime: number;
  musicThumbnailImageUrl: string;
  title: string;
  webViewURL: string;
  writingDate: string;
  youtubeLink: string;
  emotion: string;
}

export const convertResponseToDiary = (newDiary: GetDiaryResponseType): Diary => ({
  emotion: newDiary.emotion as Emotion,
  title: newDiary.title,
  type: (newDiary.diaryType as DiaryType) || 'BLUE1',
  date: new Date(newDiary.writingDate),
  content: newDiary.content,
  youtubeInfo: {
    title: newDiary.title,
    link: newDiary.youtubeLink,
    thumbnail: newDiary.musicThumbnailImageUrl,
    playTime: newDiary.musicPlayTime,
  },
});

export function getDiaryByDate(
  { date, token }: GetDiaryRequestType,
): Promise<AxiosResponse<GetDiaryResponseType>> {
  return axios.get(`${BASE_URL}/api/v1/diary/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
}
