import { useState } from "react";
import "./App.css";
import { ColorBoard } from "./components/ColorBoard";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      {data.map((item, index) => {
        const {
          bgColor,
          textColor,
          text1,
          text2,
          dateText: title1,
          colorName: title2,
        } = item;
        return (
          <div key={index}>
            <ColorBoard
              bgColor={bgColor}
              textColor={textColor}
              dateText={title1}
              colorName={title2}
              text1={text1}
              text2={text2}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
