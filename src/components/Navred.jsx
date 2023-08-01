import React from "react";
import Mynav from "./Mynav";
import Fitfive from "./Fitfive";
import { datasecond } from "../common/Helper";
import hero_red from "../assets/img/hero_red.png";
const Navred = () => {
  return (
    <div>
      <Mynav bg_clr="bg_red" text_clr="clr_red" text_change="All pages">
        <li>
          <a className="text-white fw-bold mb-0" href="#">
            Work
          </a>
          <svg
            className="ms-2"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15 7.5L10 12.5L5 7.5"
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </Mynav>
      <Fitfive
        products={datasecond}
        hero={hero_red}
        hero_text="The body is a fascinatingly complex machine composed of different cells, each with its particular set of functions mediated by a centralized system, which is the brain. All cells interact to maintain a controlled and stable environment within the body. Any deviation from that balanced state will trigger bodily reactions to restore equilibrium in the short term otherwise the body will find a way to compensate for its ineffective restoration, leading ultimately to dysfunction, disease and undue tensions."
      >
        <button className="Get_btn text-white home border-0 mt-2">
          Get in touch
        </button>
      </Fitfive>
    </div>
  );
};
export default Navred;
