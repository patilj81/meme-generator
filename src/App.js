import React from "react";
import "./style.css";
import Header from "./Header";
import MemeCreator from "./MemeCreator";
import Download from "./Download";

export default function App() {
  return (
    <div>
      <Header />
      <MemeCreator />
      <Download />
    </div>
  );
}
