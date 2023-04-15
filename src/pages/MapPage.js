import AdsComponent from ".././AdsComponent";
import Map from "./Map";
import ".././App.css";

function MapPage({ divRef }) {


  return (
    <section>
      <section className="Map-container">
        <section className="Map-padding" ref={divRef}>
          <Map />
        </section>
      </section>
      <AdsComponent dataAdSlot='8658257981' />
      <div className="flag-counter">
        <a href="https://info.flagcounter.com/s6dX">
          <img src="https://s11.flagcounter.com/count2/s6dX/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_16/viewers_3/labels_0/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0" />
        </a>
      </div>
    </section>
  );
};

export default MapPage;