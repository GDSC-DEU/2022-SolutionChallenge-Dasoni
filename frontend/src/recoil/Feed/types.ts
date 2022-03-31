export interface FeedTypes {
  comment: number;
  content: string;
  createdTime: string;
  emotion: "VERY_HAPPY" | "HAPPY" | "NORMAL" | "SAD" | "VERY_SAD";
  feedId: string;
  like: number;
  stateType: "FATHER" | "MOTHER" | "PREGNANT";
  title: string;
}
