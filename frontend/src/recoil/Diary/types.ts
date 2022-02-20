export interface DiaryTypes {
  diary_id: string;
  title: string;
  emotion: string;
  content: string;
  created_date: string;
  updated_date: string;
}

export interface Config {
  resources: {
    content: DiaryTypes[];
  };
}
