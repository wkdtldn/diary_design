"use client";

import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import moment from "moment";
import "./calendar.css";

export default function CalendarPage() {
  const today = new Date();
  const [value, setValue] = useState(new Date());
  const handleDate = (newDate) => {
    setValue(newDate);
  };
  const [Diary, setDiary] = useState();
  return (
    <div className="CalendarPageWrapper">
      <div className="CalendarWrapper">
        <Calendar
          locale="ko"
          value={value}
          onChange={handleDate}
          formatDay={(locale, date) => moment(date).format("D")}
          formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
          calendarType="gregory" // 일요일 부터 시작
          showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
          next2Label={null} // +1년 & +10년 이동 버튼 숨기기
          prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
          minDetail="year" // 10년단위 년도 숨기기
          tileContent={({ date, view }) => {
            if (
              date.getMonth() === today.getMonth() &&
              date.getDate() === today.getDate()
            ) {
              return <div className="Today">오늘</div>;
            }
          }}
        />
      </div>
      <div className="FilterWrapper">
        <span style={{ fontWeight: "bold" }}>
          {value.getFullYear()}년 {value.getMonth() + 1}월 {value.getDate()}일
        </span>
        <select className="Filter">
          <option value="time">시간순</option>
          <option value="like">좋아요순</option>
          <option value="comment">댓글순</option>
        </select>
      </div>
      <div className="ContentWrapper">
        <button className="contentbox">
          <p className="contentUser">by__ @홍길동</p>
          <span className="contentTitle">오늘은 내 생일!🥳</span>
          <p className="contentTime">1:51 PM</p>
        </button>
        <button className="contentbox">
          <p className="contentUser">by__ @박민수</p>
          <span className="contentTitle">다리 골정</span>
          <p className="contentTime">4:32 PM</p>
        </button>
      </div>
    </div>
  );
}
