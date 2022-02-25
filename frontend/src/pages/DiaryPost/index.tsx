import axios from "axios";
import * as React from "react";

import { DASONI_BACKEND_API } from "../../.env";
import DiaryInput from "../../components/atoms/inputs/DiaryInput";

interface DiaryPost {
  content: string;
  emotion: string;
  title: string;
}

interface DiaryPostResponse {
  content: {
    content: string;
    created_date: string;
    emotion: string;
    id: string;
    modified_date: string;
    title: string;
  };
  link: string;
}

function DiaryPost() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [emotion, setEmotion] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios.post<DiaryPostResponse>(
      `${baseURL}/api/diaries`,
      {
        title,
        content,
        emotion,
      }
    );
    setTitle("");
    setContent("");
    setEmotion("");

    console.log(response);
  };

  return (
    <>
      <h1>post page</h1>
      <form>
        {/* <form onSubmit={handleSubmit}> */}
        <DiaryInput
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          valid={true}
        />
        <DiaryInput
          type="text"
          value={content}
          placeholder="content"
          onChange={(e) => setContent(e.target.value)}
          valid={true}
        />
        <DiaryInput
          type="text"
          value={emotion}
          placeholder="emotion"
          onChange={(e) => setEmotion(e.target.value)}
          valid={true}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default DiaryPost;
