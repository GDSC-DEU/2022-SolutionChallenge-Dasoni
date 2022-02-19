import * as React from "react";

import DiaryInput from "../../components/atoms/inputs/DiaryInput";


function DiaryPost() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [emotion, setEmotion] = React.useState("");

  return (
    <>
      <h1>post page</h1>
      <form>
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
