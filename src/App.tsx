import { useState } from "react";
import GradientGenerator from "./Components/GradientGenerator/GradientGenerator";
import Context from "./Context";
import "./App.css";

function App() {
  const [colors, setColors] = useState<string[]>(["#ff0000", "#0000ff"]);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [gradientType, setGradientType] = useState<
    "linear" | "radial" | "conic"
  >("linear");
  const [angle, setAngle] = useState<number>(90);

  return (
    <Context.Provider
      value={{
        colors,
        setColors,
        selectedColorIndex,
        setSelectedColorIndex,
        gradientType,
        setGradientType,
        angle,
        setAngle,
      }}
    >
      <h2 className="my-4 d-flex justify-content-center">
        {" "}
        Background Generator
      </h2>
      <GradientGenerator />
    </Context.Provider>
  );
}

export default App;
