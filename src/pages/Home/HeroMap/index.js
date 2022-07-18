import React from "react";
import * as SC from "./styles";

function HeroMap() {
  return (
    <SC.MapContainer>
      <SC.Map>
        <iframe
          title="Adirondack Foot Care Map"
          frameBorder="0"
          style={{
            border: 0,
            height: "100%",
            width: "100%",
            position: "relative",
          }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&center=42.86788684949196,-73.80636068256163&zoom=13&maptype=roadmap&q=954+NY-146,+Clifton+Park,+NY+1`}
          allowFullScreen
        />
      </SC.Map>
    </SC.MapContainer>
  );
}

export default HeroMap;
