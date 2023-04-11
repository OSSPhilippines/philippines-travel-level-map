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
        <section>
            <section className="Map-container">
                <section className="Map-padding" ref={divRef}>
                    <Map/>
                </section>
                <section className="save-image-button" onClick={downloadJpg}>Save Image</section>
            </section>
        <AdsComponent dataAdSlot='8658257981' /> 
        </section>
    );
};

export default MapPage;