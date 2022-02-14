import * as React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { api } from '../../api';

interface DiaryContent {
  diary_id: string;
  title: string;
  emotion: string;
  content: string;
  created_date: string;
  updated_date: string;
}

function Diary() {
  const fetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data.resources;
  };

  const { data, error } = useSWR(`${api}/api/diaries`, fetcher);
  const contents = data?.content;

  return (
    <>
      <h2>Diary Page</h2>
      <ol>
        {contents &&
          contents.map((content: DiaryContent) => (
            <li key={content.diary_id}>{content.title}</li>
          ))}
      </ol>
    </>
  );
}

export default Diary;
