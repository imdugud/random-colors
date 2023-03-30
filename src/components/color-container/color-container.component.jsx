import ColorBlock from "../color-block/color-block.component";
import "./color-container.styles.scss";

function ColorContainer({colorList}) {
  
  return (
    <div className="block-container">
      {colorList.map((color, i) => (
        <ColorBlock key={i} color={color} />
      ))}
    </div>
  );
}

export default ColorContainer;
