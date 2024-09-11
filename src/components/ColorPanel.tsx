// ColorPanel.tsx
import styled from "styled-components";

interface ColorPanelProps {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

const ColorSquare = styled.div<
  Pick<ColorPanelProps, "red" | "green" | "blue" | "alpha">
>`
  width: 200px;
  height: 200px;
  background-color: rgba(
    ${(props) => props.red},
    ${(props) => props.green},
    ${(props) => props.blue},
    ${(props) => props.alpha}
  );
`;

const ColorPanel = ({ red, green, blue, alpha }: ColorPanelProps) => {
  return <ColorSquare red={red} green={green} blue={blue} alpha={alpha} />;
};

export default ColorPanel;
