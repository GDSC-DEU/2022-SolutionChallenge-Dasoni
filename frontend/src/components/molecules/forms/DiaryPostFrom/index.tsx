import axios from "axios";
import * as React from "react";
import { useState, useCallback } from "react";

import DiaryInput from "components/atoms/inputs/DiaryInput";
import SumbitButton from "components/atoms/buttons/SubmitButton";
import useDiaryActions from "hooks/useDiaryActions";

import {
  DiaryPostFormWrap,
  InputLabel,
  CheckBoxLabel,
  MoodBox,
  MoodItem,
} from "./styles";

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
      <InputLabel>
        <DiaryInput
          type="date"
          value={date}
          placeholder="Date (click to open calendar)"
          onChange={(e) => setDate(e.target.value)}
          valid={true}
        />
      </InputLabel>
      <InputLabel>
        <DiaryInput
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          valid={true}
        />
      </InputLabel>

      <InputLabel>
        Choose your mood
        <MoodBox>
          <MoodItem
            className="clicked"
            onClick={(e) => {
              e.preventDefault();
              setEmotion("VERY_SAD");
            }}
          >
            <img src="" />
            <div>So bad</div>
          </MoodItem>
          <MoodItem
            onClick={(e) => {
              e.preventDefault();
              setEmotion("SAD");
              console.log(emotion);
            }}
          >
            <img src="" />
            <div>Bad</div>
          </MoodItem>
          <MoodItem
            onClick={(e) => {
              e.preventDefault();
              setEmotion("NORMAL");
            }}
          >
            <img src="" />
            <div>So-so</div>
          </MoodItem>
          <MoodItem
            onClick={(e) => {
              e.preventDefault();
              setEmotion("HAPPY");
            }}
          >
            <img src="" />
            <div>Happy</div>
          </MoodItem>
          <MoodItem
            onClick={(e) => {
              e.preventDefault();
              setEmotion("VERY_HAPPY");
            }}
          >
            <img src="" />
            <div>So Happy</div>
          </MoodItem>
        </MoodBox>
      </InputLabel>

      <InputLabel>
        Record your day
        <textarea
          value={content}
          placeholder="Writing in English is so difficult... love u Google."
          onChange={(e) => setContent(e.target.value)}
        />
      </InputLabel>

      <CheckBoxLabel>
        <DiaryInput
          type="checkbox"
          onChange={(e) => setFeed(e.target.checked)}
          valid={true}
        />
        Share this story
      </CheckBoxLabel>
      <div className="button-wrap">
        <SumbitButton>Done</SumbitButton>
      </div>
    </DiaryPostFormWrap>
  );
}

export default DiaryPostForm;
