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
        <div className="flag-counter">
            <a  href="https://info.flagcounter.com/s6dX">
                <img src="https://s11.flagcounter.com/count2/s6dX/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_16/viewers_3/labels_0/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0"/>
            </a>
        </div>
        </section>
    );
};

export default MapPage;