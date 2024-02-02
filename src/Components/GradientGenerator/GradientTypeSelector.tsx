import { FC, useContext } from "react";
import Context from "../../Context";

const GradientTypeSelector: FC = () => {
  const { gradientType, setGradientType } = useContext(Context);

  const handleSetGradientType = (type: string) => {
    setGradientType(type);
  };

  return (
    <div className="my-2 py-2 frame">
      <button
        className="btn custom-btn btn-16 mx-2"
        onClick={() => handleSetGradientType("linear")}
        disabled={gradientType === "linear"}
      >
        Linear
      </button>
      <button
        className="btn custom-btn btn-16 mx-2"
        onClick={() => handleSetGradientType("radial")}
        disabled={gradientType === "radial"}
      >
        Radial
      </button>
      <button
        className="btn custom-btn btn-16 mx-2"
        onClick={() => handleSetGradientType("conic")}
        disabled={gradientType === "conic"}
      >
        Conic
      </button>
    </div>
  );
};

export default GradientTypeSelector;
