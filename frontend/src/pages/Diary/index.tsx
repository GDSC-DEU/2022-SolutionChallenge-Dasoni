import * as React from 'react';
import { useState, useEffect } from 'react';

function Diary() {
  const [dummyDiaries, setdummyDiaries] = useState([]);
  return (
    <>
      <h2>Diary Page</h2>
      <ol>
        {dummyDiaries.map((diary: Diary) => (
          <li key={diary.diary_id}>{diary.title}</li>
        ))}
      </ol>
    </>
  );
}

export default Diary;
