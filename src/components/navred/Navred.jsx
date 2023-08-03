import React from "react";
import Mynav from "../common/Mynav";
import Fitfive from "../common/Fitfive";
import { datasecond } from "../common/Helper";
import hero_red from "../../assets/img/hero_red.png";
import Vector from "../../assets/img/Vector.png";
const Navred = () => {
  return (
    <div>
      <Mynav bg_clr="bg_red" text_clr="clr_red" text_change="All pages">
        <li>
          <a className="text-white fw-bold mb-0" href="#">
            Work
          </a>
          <img className="ms-2" src={Vector} alt="Vector" />
        </li>
      </Mynav>
      <Fitfive
        products={datasecond}
        hero={hero_red}
        hero_text="The body is a fascinatingly complex machine composed of different cells, each with its particular set of functions mediated by a centralized system, which is the brain. All cells interact to maintain a controlled and stable environment within the body. Any deviation from that balanced state will trigger bodily reactions to restore equilibrium in the short term otherwise the body will find a way to compensate for its ineffective restoration, leading ultimately to dysfunction, disease and undue tensions."
      >
        <button className="Get_btn text-white home border-0 mt-2">Get</button>
        <button className="Get_btn text-white home border-0 mt-2">
          Get in touch
        </button>
        <button className="Get_btn text-white home border-0 mt-2">
          Get in touch
        </button>
      </Fitfive>
    </div>
  );
};
export default Navred;
