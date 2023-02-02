import React, { CSSProperties } from "react";
import { RGB } from "../../utils/colorTransform";
import UlHeader from "../UlHeader";
import UnderLine from "../UnderLine";
import "./index.css";

export type colorBoardProps = {
  bgColor: string;
  textColor: string;
  dateText: string;
  colorName: string;
  text1: string;
  text2: string[];
};

export function ColorBoard(props: colorBoardProps) {
  const {
    bgColor,
    textColor,
    dateText: title1,
    colorName: title2,
    text1,
    text2,
  } = props;
  const showBgColor = "# " + bgColor.toUpperCase().slice(1);
  const showTextColor = "# " + textColor.toUpperCase().slice(1);
  const bg_rgb = RGB.from(bgColor);
  return (
    <div
      className="colorBoard"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="top">
        <h1>{title1}</h1>
        <UnderLine color={textColor} />
        <p>HAPPY BIRTHDAY</p>
        <span>{showTextColor}</span>
      </div>
      <div className="mid">
        <UlHeader fontColor={textColor} text={"代表色：" + title2} />
        <UnderLine color={textColor} />
        <ul>
          <li>{showBgColor}</li>
          <li>{bg_rgb.toString()}</li>
          <li>{bg_rgb.toHSB().toString()}</li>
          <li>{bg_rgb.toCMYK().toString()}</li>
        </ul>
      </div>
      <div className="bottom">
        <UlHeader fontColor={textColor} text={"气质拿捏"} />
        <UnderLine color={textColor} />
        <ul>
          <li>{text1}</li>
          <li>
            {text2.reduce((prev, curr, index) => {
              let newPrev = prev + curr;
              if (index < text2.length - 1) {
                newPrev += "、";
              }
              return newPrev;
            }, "")}
          </li>
        </ul>
      </div>
    </div>
  );
}
