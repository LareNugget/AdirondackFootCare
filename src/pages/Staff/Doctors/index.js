import React from "react";
import * as SC from "./styles";
import SalHeadshot from "../../../images/staff_galluzzo.jpg";
import MasonHeadshot from "../../../images/staff_mason.jpg";

function Doctors() {
  return (
    <SC.Container>
      <SC.Header>Podiatrists</SC.Header>
      <SC.Bios>
        <SC.Sal>
          <img src={SalHeadshot} alt="Dr. Salvatore Galluzzo" />
          <SC.BioText>
            <h2>Dr. Salvatore Galluzzo</h2>
            <span>Podiatrist and Owner</span>
            <p>
              Salvatore Galluzzo, DPM graduated from New York College of
              Podiatric Medicine in 1986. His education and past work
              experiences have helped him evolve into one of the most renowned
              doctors of podiatric medicine in the Capital District of NY. He is
              a member of the American Podiatric Medical Association. Dr.
              Galluzzo's experience and kind-hearted nature make patients feel
              comfortable and at ease. He strives to earn your trust right from
              the start. He's practiced podiatric medicine for over 30 years, so
              rest assured you are in the best care. Dr. Galluzzo is also a
              Delegate of the Northeast Division of NYSPMA.
            </p>
          </SC.BioText>
        </SC.Sal>
        <SC.Mason>
          <img src={MasonHeadshot} alt="Dr. Douglas Mason" />
          <SC.BioText>
            <h2>Dr. Douglas Mason</h2>
            <span>Podiatrist</span>
            <p>
              Doug Mason DPM has been with Adirondack Foot Care since 2013, he
              has since gone on to work for both Adirondack Foot Care and Albany
              Podiatry. In both offices he a true asset with his surgical
              expertise and his genuine care for the patients/relationships he
              builds. Dr Mason covers the entire Capital District as a Home
              Visit podiatry Care professional. He resides in Clifton Park with
              his family whom he takes great pride in. A former runner,
              triathlete, and springboard diver, Dr Mason has also coached
              diving at both high school and collegiate levels. In his free
              time, Dr. Mason enjoys cooking and serving as a local youth group
              leader.
            </p>
          </SC.BioText>
        </SC.Mason>
      </SC.Bios>
    </SC.Container>
  );
}

export default Doctors;
