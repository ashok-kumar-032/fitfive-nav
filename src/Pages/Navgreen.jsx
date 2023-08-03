import React from "react";
import Mynav from "../components/common/Mynav";
import hero_1 from "../assets/img/hero.png";
import Fitfive from "../components/common/Fitfive";
import { data } from "../components/common/Helper";
const Navgreen = () => {
  return (
    <div>
      <Mynav bg_clr="bg_green" text_clr="clr_green" text_change="Projects" />
      <Fitfive
        products={data}
        hero={hero_1}
        hero_text="What we eat impacts our health and well-being on a fundamental level."
      />
    </div>
  );
};
export default Navgreen;
