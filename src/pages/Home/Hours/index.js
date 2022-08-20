import React from "react";
import * as SC from "./styles";
import TreatmentRoom from "../../../images/treatmentroom.webp";
import { IoMdClock } from "react-icons/io";

function Hours() {
  return (
    <SC.HoursContainer>
      <SC.ImageContainer>
        <img src={TreatmentRoom} alt="" />
      </SC.ImageContainer>
      <SC.HoursTextContainer>
        <SC.HoursLabel>
          <IoMdClock />
          <div>Office Hours</div>
        </SC.HoursLabel>

        <ul>
          <li>
            <span>Monday</span>
            <span>9:00am - 5:00pm</span>
          </li>

          <li>
            <span>Tuesday</span>
            <span>9:00am - 5:00pm</span>
          </li>

          <li>
            <span>Wednesday</span>
            <span>9:00am - 5:00pm</span>
          </li>

          <li>
            <span>Thursday</span>
            <span>9:00am - 5:00pm</span>
          </li>

          <li>
            <span>Friday</span>
            <span>9:00am - 5:00pm</span>
          </li>
        </ul>
      </SC.HoursTextContainer>
    </SC.HoursContainer>
  );
}

export default Hours;
