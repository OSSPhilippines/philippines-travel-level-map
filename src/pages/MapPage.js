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
      <AdsComponent dataAdSlot="8658257981" />
    </section>
  );
}

export default MapPage;
