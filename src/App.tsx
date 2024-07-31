// App.tsx
import { useState } from 'react';
import ColorPanel from './components/ColorPanel';
import styled from 'styled-components';
import './App.module.css'

const Slider = styled.input`
  // Estilos para os sliders
`;

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [alpha, setAlpha] = useState(1);

  return (
    <div>
      <ColorPanel red={red} green={green} blue={blue} alpha={alpha}/>
      
      <Slider type="range" min="0" max="255" value={red} onChange={(e) => setRed(Number(e.target.value))} data-cy="red-slider"/>

      <Slider type="range" min="0" max="255" value={green} onChange={(e) => setGreen(Number(e.target.value))} data-cy="green-slider"/>

      <Slider type="range" min="0" max="255" value={blue} onChange={(e) => setBlue(Number(e.target.value))} data-cy="blue-slider"/>

      <Slider type="range" min="0" max="1" value={alpha} onChange={(e) => setAlpha(Number(e.target.value))} data-cy="alpha-slider"/>
      
      {/* Sliders para green, blue e alpha */}
    </div>
  );
};

export default App;
