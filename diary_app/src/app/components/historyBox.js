import { FiClock } from "react-icons/fi";
import "./historyBox.css";

export function HistoryBox({ info }) {
  const data = info;
  return (
    <div className="content">
      <div className="dateBox">
        <h2 className="day">{data.day}</h2>
        <h3 className="date">{data.date}</h3>
      </div>
      <div className="detailBox">
        <h1 className="title">{data.title}</h1>
        <div className="etc">
          <span className="writtenby">@{data.by}</span>
          <div className="line"></div>
          <span className="time">
            <FiClock className="clock" />
            {data.hour}:{data.minute}
          </span>
        </div>
      </div>
      <div className="imgBox">
        <img
          src={data.img}
          alt="image"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
