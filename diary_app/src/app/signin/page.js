"use client";

import Link from "next/link";
import { useState } from "react";
import "./page.css";

export default function SigninPage() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  return (
    <div className="Wrapper">
      <span className="title">로그인</span>
      <div className="inputWrapper">
        <input
          className="Input"
          type="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <div style={{ position: "relative", height: "70px" }}>
          <Link className="passwordLost" href={{ pathname: "lost" }}>
            비밀번호를 잊어버리셨나요?
          </Link>
          <input
            className="Input"
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="buttonWrapper">
        <Link id="left" href={{ pathname: "/signup" }}>
          회원가입
        </Link>
        <button id="right">로그인</button>
      </div>
    </div>
  );
}
