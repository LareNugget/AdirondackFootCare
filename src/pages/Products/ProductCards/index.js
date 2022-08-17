import React from "react";
import * as SC from "./styles";
import Alaplex from "../../../images/products/alaplex.jpg";
import Bare40 from "../../../images/products/bare40.jpg";
import Betadine from "../../../images/products/betadine.jpg";
import Colig10 from "../../../images/products/colig10.jpg";
import FastFreeze from "../../../images/products/fastfreeze.jpg";
import Formula3 from "../../../images/products/formula3.jpg";
import Formula7 from "../../../images/products/formula7.jpg";
import Fortinia from "../../../images/products/fortinia.jpg";
import Glycylic from "../../../images/products/glycylic.jpg";
import GelSocks from "../../../images/products/gelsocks.jpg";
import GreenSoap from "../../../images/products/greensoap.jpg";
import HempNesic from "../../../images/products/hempnesic.jpg";
import Kamea20 from "../../../images/products/kamea20.jpg";
import KameaG from "../../../images/products/kameag.jpg";
import Luminail from "../../../images/products/luminail.jpg";
import Orthonesic from "../../../images/products/orthonesic.jpg";
import Probetic20 from "../../../images/products/probetic20.jpg";
import ToePack from "../../../images/products/toepack.jpg";
import Vircin from "../../../images/products/vircin.jpg";

function ProductCards() {
  return (
    <SC.Container>
      <SC.Header>Products</SC.Header>
      <SC.CardContainer>
        <SC.ProductCard>
          <img src={Alaplex} alt="Alaplex" />
          <SC.CardText>
            <div>Alaplex</div>
            <p>
              Alaplex is a supplement that helps with burning, tingling,
              numbness, and shooting pains in the lower extremity. It is a
              combination of vitamins and alphalipoic acid. It also contains
              Benfotiamine, which is an enhanced Thiamine
              {"(commonly known as Vitamin B1."} Improvement can be seen in as
              little as 12 weeks!
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={Bare40} alt="Bare40" />
          <SC.CardText>
            <div>Bare 40</div>
            <p>
              Maximum strength 40% Urea gel. It is an advanced treatment for
              severely cracked and fissured heels and skin. Can be applied
              morning and night. No prescription required!
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={Betadine} alt="Betadine" />
          <SC.CardText>
            <div>Betadine</div>
            <p>
              Betadine is an antimicrobial antiseptic that can be used for all
              types of wound care applications. It can be used in conjunction
              with other antimicrobials, or by itself.{" "}
              <span style={{ color: "yellow" }}>
                Betadine is an iodine containing product!
              </span>
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={Colig10} alt="Colig10" />
          <SC.CardText>
            <div>Colig 10</div>
            <p>
              Colig 10 is a supplement used for collagen, ligament, and tendon
              support. It is commonly used to treat soft tissue injuries, such
              as sprains and tendonitis.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={FastFreeze} alt="FastFreeze" />
          <SC.CardText>
            <div>Fast Freeze</div>
            <p>
              Fast Freeze is a quick relief, pain soothing gel that is excellent
              for sprains and strains, as well as minor foot and joint pain.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={Formula3} alt="Formula3" />
          <SC.CardText>
            <div>Formula 3</div>
            <p>
              Formula 3 is the #1 prescribed antifungal solution for treatment
              of fungal toenails {"(onychomycosis)"}. It is dispensed in the
              form of a lotion.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={Formula7} alt="Formula7" />
          <SC.CardText>
            <div>Formula 7</div>
            <p>
              Formula 7 is an alternative to Formula 3, designed for topical use
              on fungal toenails. It is dispensed in the form of a liquid
              solution.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={Fortinia} alt="Fortinia" />
          <SC.CardText>
            <div>Fortinia</div>
            <p>
              Fortinia is a 1.5% phenol solution. It is an excellent antiseptic
              for interdigital tinea {"(fungus)"}.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={Glycylic} alt="Glycylic" />
          <SC.CardText>
            <div>Glycylic</div>
            <p>
              Glycylic is a maximum strength 17% salicylic acid treatment for
              warts.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={GelSocks} alt="Gel Socks" />
          <SC.CardText>
            <div>Gel Socks</div>
            <p>
              Gel socks are specially designed socks which allow patients to
              apply ointments and creams to their feet without messy cleanup.
              This is done by containing the ointments and creams on your feet.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={GreenSoap} alt="Green Soap" />
          <SC.CardText>
            <div>Green Soap</div>
            <p>
              Green soap is an excellent product to exfoliate and reduce callous
              and hard skin on the feet. It is a great way to hydrate, clean
              your feet prior to applying a moisturizer or cream.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={HempNesic} alt="Hempnesic" />
          <SC.CardText>
            <div>Hempnesic</div>
            <p>
              Hempnesic is a maximum pain relief, over the counter CBD
              containing product providing natural pain relief. Derived from
              hemp seed oil, camphor, menthol, and capsaicin.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={Kamea20} alt="Kamea 20" />
          <SC.CardText>
            <div>Kamea 20</div>
            <p>
              Kamea 20 is a 20% Urea based cream that is an excellent
              moisturizer. It can be purchased without a prescription.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={KameaG} alt="Kamea G" />
          <SC.CardText>
            <div>Kamea G</div>
            <p>
              Kamea G is a 20% Urea based cream that includes glycolic acid,
              which is an exfoliator. This product is an excellent choice if you
              have severely fissured or calloused skin.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={Luminail} alt="Luminail" />
          <SC.CardText>
            <div>Luminail</div>
            <p>
              Luminail is a nail restoration product that contains eucalyptus,
              tea tree oil, as well as other natural moisturizing agents.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={Orthonesic} alt="Orthonesic" />
          <SC.CardText>
            <div>Orthonesic</div>
            <p>
              Orthonesic is a quick relief, pain soothing gel that is excellent
              for sprains and strains, as well as minor foot and joint pain.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={Probetic20} alt="Probetic 20" />
          <SC.CardText>
            <div>Probetic 20</div>
            <p>
              Probetic 20 is a moisturizing foot cream that is used to restore
              normal skin texture.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={ToePack} alt="Toe Pack" />
          <SC.CardText>
            <div>Toe Pack</div>
            <p>
              Toe packs are dispensed and prescribed following ingrown toenail
              procedures, as well as minor surgeries of the toes and feet. This
              pack will eliminate the costly purchases of dressings at
              pharmacies.
            </p>
          </SC.CardText>
        </SC.ProductCard>

        <SC.ProductCard>
          <img src={Vircin} alt="Vircin" />
          <SC.CardText>
            <div>Vircin</div>
            <p>
              Vircin is an antiviral agent that is used in the treatment of
              plantar warts. It is applied in the evening, left on overnight,
              and removed in the morning. Excellent for uncomplicated types of
              verruca/warts.
            </p>
          </SC.CardText>
        </SC.ProductCard>
      </SC.CardContainer>
    </SC.Container>
  );
}

export default ProductCards;
