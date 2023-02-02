import React from "react";
import "./index.css";

export default function UnderLine(props: { color: string }) {
  const { color } = props;
  return (
    <div className="underline">
      <div className="line" style={{ backgroundColor: color }}></div>
      <div className="point" style={{ backgroundColor: color }}></div>
      <div className="point" style={{ backgroundColor: color }}></div>
      <div className="point" style={{ backgroundColor: color }}></div>
    </div>
  );
}
