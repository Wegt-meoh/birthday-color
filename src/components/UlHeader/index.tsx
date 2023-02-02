import React from "react";
import "./index.css";

export default function UlHeader(props: { fontColor: string; text: string }) {
  const { fontColor, text } = props;
  return (
    <h2 className="UlHeader" style={{ color: fontColor }}>
      <div style={{ backgroundColor: fontColor }}></div>
      {text}
    </h2>
  );
}
