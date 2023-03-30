import { useState } from "react";
import "./color-block.styles.scss";

function ColorBlock({ color }) {
  const { hex, rgb } = color;
  const hexCode = `#${hex}`;
  const [isCopied, setIsCopied] = useState(false);
  const styles = {
    backgroundColor: hexCode,
  };
  const clickHandler = () => {
    navigator.clipboard.writeText(`#${hex}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  };

  return (
    <button onClick={clickHandler} className="color-block" style={styles}>
      <span className="color-code">
        {isCopied ? `Copied to \n Clipboard` : hexCode}
      </span>
    </button>
  );
}

export default ColorBlock;
