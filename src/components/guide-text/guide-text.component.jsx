import { useState } from "react";
import "./guide-text.styles.scss";

const GuideText = ({ content }) => {
  const [isShown, setIsShown] = useState(true);

  setTimeout(() => {
    setIsShown(false);
  }, 3000);
  return (
    <>
      {isShown && (
        <div className="guide-container">
          <h2>{content}</h2>
        </div>
      )}
    </>
  );
};

export default GuideText;
