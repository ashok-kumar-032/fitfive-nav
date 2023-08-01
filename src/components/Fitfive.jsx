import React, { Children } from "react";
import hero from "../assets/img/hero.png";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
const Fitfive = (props) => {
  const { products, hero, hero_text, children } = props;
  return (
    <section className="py-5 bg-black">
      <Container>
        <div className="text-center">
          <div>
            <img src={hero} alt="hero" />
          </div>
          <p className="text-white pt-4 padding_l_r opacity_06">{hero_text}</p>
          {children}
        </div>
        <Row>
          {products.map((val) => {
            return (
              <Col lg={6} key={val.id} className="mt-xl-5 mt-lg-3">
                <div className="bg_light_black rounded-3 d-flex flex-column h_282 mt-4">
                  <div className="p-4">
                    <img src={val.img} alt="img_1" width={80} height={70} />
                    <p className="mb-0 text-white mt-3 home opacity_06">
                      {val.text}
                    </p>
                  </div>
                  <p className="text-white bg_light_black_1 p-4 mb-0 border_r_1 h-100 home opacity_06">
                    {val.disc}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
export default Fitfive;
