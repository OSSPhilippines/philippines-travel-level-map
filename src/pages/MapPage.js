import React, {  useCallback, useRef } from "react";
import { toJpeg } from 'html-to-image'
import AdsComponent from ".././AdsComponent";
import Map from "./Map"
import ".././App.css"

function MapPage() {
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
        <div>
            <div className="Map-container">
                <div className="Map-padding" ref={divRef}>
                    <Map/>
                </div>
                <div className="save-image-button" onClick={downloadJpg}>Save Image</div>
            </div>
        <AdsComponent dataAdSlot='8658257981' /> 
        </div>
    );
};

export default MapPage;