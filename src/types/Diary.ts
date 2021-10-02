type YoutubeInfo = {
  link: string;
  title: string;
  thumbnail: string;
  playTime: number;
}

export type Emotion = 'ANGRY' | 'HAPPY';
// TODO: 서버의 값에 맞춰 추가할 예정

type DiaryType =
  | 'BLUE1'
  | 'BLUE2'
  | 'GREEN1'
  | 'GREEN2';

type Diary = {
  type: DiaryType;
  date: Date;
  title: string;
  content: string;
  youtubeInfo: YoutubeInfo;
  emotion: Emotion;
}

export default Diary;
