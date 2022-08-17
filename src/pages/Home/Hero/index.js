import React from "react";
import * as SC from "./styles";
import { GiFootprint } from "react-icons/gi";
import { Link } from "react-router-dom";
import PatientPacket from "../../../files/newPatientPacket.pdf";

function Hero() {
  return (
    <SC.HeroContainer>
      <SC.HeroTextContainer>
        <SC.Slogan>
          <GiFootprint />
          <div>
            <h1>ADIRONDACK FOOT CARE</h1>
            <h4>WHERE HAPPY FEET ARE HEALTHY FEET!</h4>
          </div>
        </SC.Slogan>
        <p>
          Our Clifton Park practice is located at 954 Route 146 in Fountain
          Professional Park. We offer a range of podiatry services, including
          custom orthotics and Swiss Dolorclast treatments. We also sell a
          variety of podiatry products. Call us today to schedule an
          appointment!
        </p>
        <SC.ButtonContainer>
          <a href={PatientPacket} target="_blank" rel="noreferrer">
            <button>New Patient Form</button>
          </a>
          <Link to="/staff">
            <button>Meet Our Staff</button>
          </Link>
        </SC.ButtonContainer>
      </SC.HeroTextContainer>

      <SC.HeroMapContainer>
        <iframe
          title="Adirondack Foot Care Map"
          frameBorder="0"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&center=42.86788684949196,-73.80636068256163&zoom=13&maptype=roadmap&q=954+NY-146,+Clifton+Park,+NY+1`}
          allowFullScreen
        />
      </SC.HeroMapContainer>
    </SC.HeroContainer>
  );
}

export default Hero;
