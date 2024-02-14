import { FC, useState } from "react";

type CopyCSSProps = {
  cssCode: string;
};

const CopyCSS: FC<CopyCSSProps> = ({ cssCode }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(cssCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <span id="text">{cssCode}</span>
      <button
        id="copy"
        onClick={copyToClipboard}
        className={copied ? "copied" : ""}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CopyCSS;
