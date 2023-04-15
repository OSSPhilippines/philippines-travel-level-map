import React, { useCallback, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toJpeg } from "html-to-image";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import NoPage from "./pages/NoPage";

function App() {
  const divRef = useRef(null);

  const fileName = "phMap.jpg";

  const downloadJpg = useCallback(() => {
    if (divRef.current === null) {
      return;
    }
    toJpeg(divRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${fileName}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [divRef]);


  return (
    <div className="App">
      <BrowserRouter>
        <Layout downloadJpg={downloadJpg} />

        <Routes>
          <Route index element={<Home />} />
          <Route
            path="map"
            element={<MapPage divRef={divRef} />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      {/*<div className="Map-container">
        <div className="Map-padding" ref={divRef}>
        <Map/>
        </div>
        <div className="save-image-button" onClick={downloadJpg}>Save Image</div>
      </div>
  <AdsComponent dataAdSlot='8658257981' />*/}
    </div>
  );
}

export default App;
