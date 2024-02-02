import { CSSProperties, FC } from "react";

interface Props {
  Style: CSSProperties;
}

const Preview: FC<Props> = ({ Style }) => {
  return <div style={Style} />;
};

export default Preview;
