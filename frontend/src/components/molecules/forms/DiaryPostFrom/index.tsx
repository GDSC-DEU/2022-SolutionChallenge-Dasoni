import * as React from "react";
import { useState, useCallback } from "react";

import { TextArea } from "components/atoms/inputs/TextArea";
import useDiaryActions from "hooks/useDiaryActions";

import { DiaryPostFormWrap, InputLabel, MoodBox, MoodItem } from "./styles";
import { SumbitButton } from "components/atoms/buttons/SubmitButton";
import { Input } from "components/atoms/inputs/Input";
import { DateInput } from "components/atoms/inputs/DateInput";
import CheckBox from "components/atoms/inputs/CheckBox";

import VERY_SAD from "assets/emotionIcons/verysad.svg";
import SAD from "assets/emotionIcons/sad.svg";
import NORMAL from "assets/emotionIcons/normal.svg";
import HAPPY from "assets/emotionIcons/happy.svg";
import VERY_HAPPY from "assets/emotionIcons/veryhappy.svg";

const emotions = ["VERY_SAD", "SAD", "NORMAL", "HAPPY", "VERY_HAPPY"];

type Emotion = "VERY_SAD" | "SAD" | "NORMAL" | "HAPPY" | "VERY_HAPPY";
const emotionImages = {
  VERY_SAD,
  SAD,
  NORMAL,
  HAPPY,
  VERY_HAPPY,
};

function DiaryPostForm() {
  const diaryActions = useDiaryActions();
  const [content, setContent] = useState("");
  const [date, setDate] = useState("2022-03-02");
  const [emotion, setEmotion] = useState("");
  const [feed, setFeed] = useState(false);
  const [title, setTitle] = useState("");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      diaryActions.postDiary({
        content,
        date,
        emotion,
        feed,
        title,
      });
    },
    [content, date, emotion, feed, title]
  );

  return (
    <DiaryPostFormWrap onSubmit={onSubmit}>
      <InputLabel flexDirection="row">
        <span className="label">Date</span>
        <DateInput
          type="date"
          value={date}
          placeholder="Date (click to open calendar)"
          onChange={(e) => setDate(e.target.value)}
        />
      </InputLabel>

      <InputLabel flexDirection="column">
        <span className="label">Mood</span>
        <MoodBox>
          {emotions.map((element, index) => (
            <MoodItem
              key={index}
              clicked={emotion === element}
              onClick={(e) => {
                e.preventDefault();
                setEmotion(element);
              }}
            >
              <img src={emotionImages[element as Emotion]} />
            </MoodItem>
          ))}
        </MoodBox>
      </InputLabel>

      <InputLabel flexDirection="column">
        <span className="label">Title</span>
        <Input
          type="text"
          value={title}
          placeholder="Add a title to this entry"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </InputLabel>

      <InputLabel flexDirection="column">
        <span className="label">Story</span>
        <TextArea
          value={content}
          placeholder="Write something"
          onChange={(e) => setContent(e.target.value)}
        />
      </InputLabel>
      <div className="checkbox-wrap">
        <CheckBox checkboxId="diary-post-share-checkbox">
          Share to Feed
        </CheckBox>
      </div>
      <SumbitButton type="submit" onSubmit={onSubmit}>
        Done
      </SumbitButton>
    </DiaryPostFormWrap>
  );
}

export default DiaryPostForm;
