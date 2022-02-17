import axios from "axios";
import * as React from "react";
import useSWR from "swr";

import { api } from "../../api";

import type { AxiosResponse } from "axios";
import type { Fetcher, Key } from "swr";

interface DiaryContent {
  diary_id: string;
  title: string;
  emotion: string;
  content: string;
  created_date: string;
  updated_date: string;
}

interface Config {
  resources: {
    content: DiaryContent[];
  };
}

function Diary() {
  const fetcher = async (url: string) => {
    const response = await axios.get<Config>(url);
    return response.data.resources.content;
  };

  const { data } = useSWR(`${api}/api/diaries`, fetcher);

  return (
    <>
      <h2>Diary Page</h2>
      <ol>
        {data &&
          data.map((content) => (
            <li key={content.diary_id}>{content.title}</li>
          ))}
      </ol>
    </>
  );
}

export default Diary;
