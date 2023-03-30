import { useState, useEffect } from "react";
import ColorContainer from "./components/color-container/color-container.component";
import GuideText from "./components/guide-text/guide-text.component";
import { randColor } from "./utils/rand.util";
import { useKeyPress } from "./utils/key-press.js";

import "./App.css";

const BLOCK_COUNT = 30;

const App = () => {
  const [colorList, setColorList] = useState([]);
  useKeyPress(
    () => setColorList(generateRandColorList(BLOCK_COUNT)),
    ["Space"]
  );

  const generateRandColorList = (count) =>
    [...Array(count)].map((c) => randColor());

  useEffect(() => {
    setColorList(generateRandColorList(BLOCK_COUNT));
  }, []);

  return (
    <div className="App">
      <ColorContainer colorList={colorList} />
      <GuideText content="Press 'Space' to Change Colors"/>
    </div>
  );
};

export default App;
