import React, {Component} from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";


function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[5])}/>
        
    </div>
  );
}

export default App;
