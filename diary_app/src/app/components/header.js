import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import "./header.css";

export function Header() {
  return (
    <div className="Header">
      <Link href={{ pathname: "calendar" }}>
        <CiCalendar style={{ fontSize: "23px", marginRight: "2px" }} />
        <span>캘린더</span>
      </Link>
      <Link href={{ pathname: "recent" }}>
        <IoMdTime style={{ fontSize: "21.5px", marginRight: "2px" }} />
        <span>최근</span>
      </Link>
      <Link className="userButton" href={{ pathname: "user" }}>
        <FaUserCircle style={{ fontSize: "23px", marginRight: "2px" }} />
        <span>유저 이름</span>
      </Link>
    </div>
  );
}
