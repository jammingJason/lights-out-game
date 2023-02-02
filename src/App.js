import React from 'react';
import Board from './Board';
import './App.css';

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <Board ncols={1} nrows={1} chanceLightStartsOn={3.2} />
    </div>
  );
}

export default App;
