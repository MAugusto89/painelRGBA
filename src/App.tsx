// App.tsx
import { useState } from "react";
import ColorPanel from "./components/ColorPanel";
import styles from "./styles.module.css";

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [alpha, setAlpha] = useState(1);

  return (
    <div className={styles.container}>
      <div className="valorCores" data-cy="dadosRGBA">
        rgba({red}, {green}, {blue}, {alpha})
      </div>

      <ColorPanel red={red} green={green} blue={blue} alpha={alpha} />

      <input
        type="range"
        min="0"
        max="255"
        value={red}
        onChange={(e) => setRed(Number(e.target.value))}
        data-cy="red-slider"
      />

      <input
        type="range"
        min="0"
        max="255"
        value={green}
        onChange={(e) => setGreen(Number(e.target.value))}
        data-cy="green-slider"
      />

      <input
        type="range"
        min="0"
        max="255"
        value={blue}
        onChange={(e) => setBlue(Number(e.target.value))}
        data-cy="blue-slider"
      />

      <input
        type="range"
        min="0"
        max="1"
        step={0.1}
        value={alpha}
        onChange={(e) => setAlpha(Number(e.target.value))}
        data-cy="alpha-slider"
      />

      {/* Sliders para green, blue e alpha */}
    </div>
  );
};

export default App;
