export interface DiaryTypes {
  content: string;
  contentEmotion: string;
  date: string;
  diaryId: string;
  emotion: string;
  title: string;
}

export interface Config {
  resources: {
    content: DiaryTypes[];
  };
}
