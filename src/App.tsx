import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { ColorBoard } from "./components/ColorBoard";
import { data } from "./data";

function App() {
  const [datas, setDatas] = useState<JSX.Element[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const newDatas = [];
      let newIndex = index;
      for (let i = 0; i < 4; i += 1) {
        if (newIndex >= data.length) {
          newIndex = 0;
        }
        newDatas.push(
          <div key={newIndex}>
            <ColorBoard
              bgColor={data[newIndex].bgColor}
              textColor={data[newIndex].textColor}
              dateText={data[newIndex].dateText}
              colorName={data[newIndex].colorName}
              text1={data[newIndex].text1}
              text2={data[newIndex].text2}
            />
          </div>
        );
        newIndex += 1;
      }
      setIndex(newIndex);
      setDatas(newDatas);
    }, 9000);
  }, [index]);

  return <div className="App">{datas}</div>;
}

export default App;
