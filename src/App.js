import React, { useState,  useCallback, useRef } from "react";
import Map from "./Map"
import './App.css'
import { toJpeg } from 'html-to-image'

function App() {
  const [showDialogBox, setShowDialogBox] = useState(false);

  const divRef = useRef(null);
  
  const fileName = 'phMap.jpg'


  const downloadJpg = useCallback(() => {
    if (divRef.current === null) {
      return
    }
    toJpeg(divRef.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = `${fileName}`
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [divRef]);

  return (
    <div className="App">
      <div className="Map-container">
        <div className="Map-padding" ref={divRef}>
        <Map/>
        </div>
        <div className="save-image-button" onClick={downloadJpg}>Save Image</div>
      </div>
     
       </div>
  );
}

export default App;