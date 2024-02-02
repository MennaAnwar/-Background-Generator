import React, { FC, useContext } from "react";
import Context from "../../Context";

const ColorSelector: FC = ({}) => {
  const { colors, setColors, selectedColorIndex, setSelectedColorIndex } =
    useContext(Context);

  const deleteColor = (index: number) => {
    if (colors.length > 2) {
      setColors(colors.filter((_: any, i: number) => i !== index));
      if (index === selectedColorIndex && index > 0) {
        setSelectedColorIndex(index - 1);
      }
    } else {
      alert("You must have at least two colors.");
    }
  };

  const selectColor = (index: number) => {
    setSelectedColorIndex(index);
  };

  const addColor = () => {
    setColors([...colors, "#ffffff"]);
  };

  return (
    <div className="d-flex flex-wrap">
      {colors.map((color: string, index: number) => (
        <button
          key={index}
          className="circle-btn mb-2"
          style={{ background: color }}
          onClick={() => selectColor(index)}
        >
          <span className="x" onClick={() => deleteColor(index)}>
            &#215;
          </span>
        </button>
      ))}
      <button className="add" onClick={addColor}>
        +
      </button>
    </div>
  );
};

export default ColorSelector;
