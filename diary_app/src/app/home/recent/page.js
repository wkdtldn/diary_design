"use client";

import { CiCalendar } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import "./recent.css";
import { useState } from "react";
import { HistoryBox } from "@/app/components/historyBox";

export default function Recent() {
  const [notNull, setNotnull] = useState(true);
  const [showOption, setShowOption] = useState("line");
  const [dayfilter, setDayfilter] = useState("week");
  const [lineupOption, setLineupOption] = useState("recent");

  const handleSelect = (e) => {
    setShowOption(e.target.value);
  };

  const params = {
    date: "금",
    day: 29,
    title: "생일날 케익 떨군 이야기🥲",
    by: "홍길동",
    hour: "18",
    minute: "02",
    img: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1cnb/image/S1QGPjizDHfhaNFXrV1MSuyoYLw",
  };
  return (
    <div className="ContentWrapper">
      <div className="filterWrapper">
        <div className="dateWrapper">
          {notNull ? (
            <IoCalendarOutline className="calendarIcon" />
          ) : (
            <CiCalendar className="calendarIcon" />
          )}
          <select
            className="datefilter"
            value={dayfilter}
            onChange={handleSelect}
          >
            <option value="week">이번주</option>
            <option value="lastweek">지난주</option>
            <option value="nextweek">다음주</option>
          </select>
        </div>
        <div style={{ display: "flex" }}>
          <select
            className="showMethodfilter"
            value={showOption}
            onChange={handleSelect}
          >
            <option value="line">선</option>
            <option value="block">블록</option>
          </select>
          <select
            className="orderfilter"
            value={lineupOption}
            onChange={handleSelect}
          >
            <option value="recent">최신순</option>
            <option value="last">오래된순</option>
          </select>
        </div>
      </div>
      <HistoryBox info={params} />
    </div>
  );
}
