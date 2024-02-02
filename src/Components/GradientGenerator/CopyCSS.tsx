import React, { FC } from "react";

type CopyCSSProps = {
  cssCode: string;
};

const CopyCSS: FC<CopyCSSProps> = ({ cssCode }) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(cssCode)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <span id="text">{cssCode} </span>
      <button id="copy" onClick={copyToClipboard}>
        Copy
      </button>
    </div>
  );
};

export default CopyCSS;
