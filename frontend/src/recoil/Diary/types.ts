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

export interface EmotionAverage {
  emotion: string;
  endedDate: string;
  startedDate: string;
}
