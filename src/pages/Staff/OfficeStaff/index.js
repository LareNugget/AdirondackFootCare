import React from "react";
import * as SC from "./styles";
import CandiHeadshot from "../../../images/staff_candida.webp";
import MarkHeadshot from "../../../images/staff_mark.webp";

function OfficeStaff() {
  return (
    <SC.Container>
      <SC.Header>Office Staff</SC.Header>
      <SC.Bios>
        <SC.Candi>
          <img src={CandiHeadshot} alt="Candida" />
          <SC.BioText>
            <h2>Candida Hanley</h2>
            <span>Office Manager</span>
            <p>
              Candida has been with Adirondack Foot Care for over 10 years. All
              four of her boys went to Shen. She loves the outdoors, hiking,
              camping, kayaking in the Adirondacks. She loves spending time with
              her kids and her grandchild. Candida is always available to the
              patients here at Adirondack Foot Care and takes pride in the
              service we provide to each and everyone. Her direct email is
              chanley@adirondackfootcare.com
            </p>
          </SC.BioText>
        </SC.Candi>
        <SC.Mark>
          <img src={MarkHeadshot} alt="Mark" />
          <SC.BioText>
            <h2>Mark York</h2>
            <span>Receptionist</span>
            <p>
              Mark is new to the office but has experience in the medical field.
              You may have seen him at Wellnow in Clifton Park! Mark is a Shen
              graduate and lives locally with his family. In his free time, he
              likes to get out and play golf! He is a great addition to the
              Adirondack Foot Care team!
            </p>
          </SC.BioText>
        </SC.Mark>
      </SC.Bios>
    </SC.Container>
  );
}

export default OfficeStaff;
