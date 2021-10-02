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
