import React, { useState } from "react";
import Map from "./Map"
import './App.css'

function App() {
  const [showDialogBox, setShowDialogBox] = useState(false);

  return (
      <div className="Map-container">
        <Map/>
      </div>
  );
}

export default App;