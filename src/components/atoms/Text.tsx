import { myMilkYellow } from "../../styles/colors";

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  isHeading?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function Text({ style, children, ...rest }: TextProps) {
  const textStyle = {
    margin: 0,
    padding: 0,
    color: myMilkYellow,
    fontFamily: "Calibre-Regular",
    size: 20,
  };

  return (
    <div {...rest} style={{ ...textStyle, ...style }}>
      {children}
    </div>
  );
}
