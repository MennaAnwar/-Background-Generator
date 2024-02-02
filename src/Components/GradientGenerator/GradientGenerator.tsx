import React, { CSSProperties, FC, useContext } from "react";
import { ColorResult, SketchPicker } from "react-color";
import Preview from "../GradientGenerator/Preview";
import Context from "../../Context";
import CopyCSS from "./CopyCSS";
import GradientTypeSelector from "./GradientTypeSelector";
import AngleSelector from "./AngleSelector";
import ColorSelector from "./ColorSelector";

const GradientGenerator: FC = () => {
  const { colors, setColors, selectedColorIndex, gradientType, angle } =
    useContext(Context);

  const updateColor = (color: ColorResult) => {
    const newColors = [...colors];
    newColors[selectedColorIndex] = color.hex;
    setColors(newColors);
  };

  const getGradientCSS = () => {
    let gradientDirection = "";
    if (["linear", "repeating-linear"].includes(gradientType)) {
      gradientDirection = `${angle}deg, `;
    } else if (gradientType === "conic") {
      gradientDirection = `from ${angle}deg, `;
    }

    return `${gradientType}-gradient(${gradientDirection}${colors.join(", ")})`;
  };

  const gradientStyle: CSSProperties = {
    background: getGradientCSS(),
    width: "100%",
    height: "400px",
    borderRadius: "8px",
  };

  return (
    <>
      <div className="row  flex-row justify-content-around">
        <div className="col-6">
          <Preview Style={gradientStyle} />
          <div className=" mt-3">
            <ColorSelector />
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <SketchPicker
            color={colors[selectedColorIndex]}
            onChangeComplete={updateColor}
          />
        </div>
        <div className="d-flex justify-content-evenly mt-4">
          <GradientTypeSelector />
          {["linear", "conic"].includes(gradientType) && <AngleSelector />}
        </div>
        <CopyCSS cssCode={`background: ${getGradientCSS()};`} />
      </div>
    </>
  );
};

export default GradientGenerator;
