import axios from "axios";
import * as React from "react";
import { useRecoilState } from "recoil";

import { DASONI_BACKEND_API } from "secret";
import DiaryInput from "components/atoms/inputs/DiaryInput";
import { diariesAtom } from "recoil/Diary";

import type { DiaryTypes } from "recoil/Diary";
import SumbitButton from "components/atoms/buttons/SubmitButton";
import {
  DiaryPostFormWrap,
  InputLabel,
  CheckBoxLabel,
  MoodBox,
  MoodItem,
} from "./styles";

interface DiaryPost {
  content: string;
  emotion: string;
  isShared: boolean;
}

interface DiaryPostResponse {
  content: {
    id: string;
    title: string;
    content: string;
    emotion: string;
    created_date: string;
    modified_date: string;
  };
  link: string;
}

function DiaryPostForm() {
  const [date, setDate] = React.useState("2020-10-10");
  const [content, setContent] = React.useState("");
  const [emotion, setEmotion] = React.useState("");
  const [isShared, setIsShared] = React.useState(false);

  const [diaries, setDiaries] = useRecoilState<DiaryTypes[]>(diariesState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios.post<DiaryPostResponse>(
      `${DASONI_BACKEND_API}/api/diaries`,
      {
        content,
        emotion,
      }
    );
    // setDiaries([...diaries, response.data.content]);

    setContent("");
    setEmotion("");

    console.log(response);
  };
  return (
    <DiaryPostFormWrap onSubmit={handleSubmit}>
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
        Choose your mood
        <MoodBox>
          <MoodItem className="clicked" onClick={() => setEmotion("So bad")}>
            <img src="" />
            <div>So bad</div>
          </MoodItem>
          <MoodItem onClick={() => setEmotion("Bad")}>
            <img src="" />
            <div>Bad</div>
          </MoodItem>
          <MoodItem onClick={() => setEmotion("So-so")}>
            <img src="" />
            <div>So-so</div>
          </MoodItem>
          <MoodItem onClick={() => setEmotion("Happy")}>
            <img src="" />
            <div>Happy</div>
          </MoodItem>
          <MoodItem onClick={() => setEmotion("So Happy")}>
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
          onChange={(e) => setIsShared(e.target.checked)}
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
