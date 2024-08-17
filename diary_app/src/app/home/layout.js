"use client";

import "./layout.css";
import { Header } from "../components/header";

export default function Home({ children }) {
  return (
    <div className="HomeWrapper">
      <div style={{ width: "100%", height: "60px" }}>
        <Header></Header>
      </div>
      <div className="contentPage">{children}</div>
    </div>
  );
}
