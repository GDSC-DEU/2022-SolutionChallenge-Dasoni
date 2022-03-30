import LineChart from "components/organisms/LineChart";
import PageNav from "components/organisms/navbars/PageNav";
import * as React from "react";
import { useEffect } from "react";

import useStatisticsActions from "hooks/useStatisticsActions";

import { StatisticsWrap, StatisticsBox } from "./styles";
import { useRecoilState } from "recoil";
import { statisticsAtom, StatisticsTypes } from "recoil/Statistics";

function Statistics() {
  const statisticsAtions = useStatisticsActions();
  const [statistics, setStatistics] =
    useRecoilState<StatisticsTypes[]>(statisticsAtom);

  useEffect(() => {
    statisticsAtions.getStatistics();
  }, []);

  return (
    <>
      <PageNav currentPage="Statistics" />
      <StatisticsWrap>
        <StatisticsBox>
          <div className="statistics-title">Mood Calendar</div>
          <div className="box"></div>
        </StatisticsBox>

        <StatisticsBox>
          <div className="statistics-title">Mood Statistics</div>
          <div className="box">
            <LineChart chartData={statistics} />
          </div>
        </StatisticsBox>
      </StatisticsWrap>
    </>
  );
}

export default Statistics;
