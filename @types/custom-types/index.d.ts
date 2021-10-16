declare module 'custom-types' {
  // eslint-disable-next-line import/prefer-default-export
  namespace customTypes {
    type State<T> = Dispatch<SetStateAction<T>>;
  }

  namespace diary {
    type YoutubeInfo = {
      link: string;
      title: string;
      thumbnail: string;
      playTime: number;
    }

    type Emotion =
      | 'ANGRY'
      | 'FUNNY'
      | 'NOTBAD'
      | 'PANIC'
      | 'SAD';

    type DiaryType =
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
  }
}
