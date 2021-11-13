type YoutubeInfo = {
  link: string;
  title: string;
  thumbnail: string;
  playTime: number;
}

export type Emotion =
  | 'ANGRY'
  | 'FUNNY'
  | 'NOTBAD'
  | 'PANIC'
  | 'SAD';

export type DiaryType =
  | 'BLUE'
  | 'GREEN';

type Diary = {
  type: DiaryType;
  date: Date;
  title: string;
  content: string;
  youtubeInfo: YoutubeInfo;
  emotion: Emotion;
}

export default Diary;
