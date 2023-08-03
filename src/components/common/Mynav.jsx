import React, { useState } from "react";
import { Container } from "react-bootstrap";
import nav_logo from "../../assets/img/nav_logo.svg";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
const Mynav = ({ bg_clr, text_clr, text_change, children }) => {
  const [first, setfirst] = useState(true);
  function clickshow() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className={bg_clr}>
      <Container>
        <div className="py-3 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-center">
            <img className="z_10 pointer w-100 pointer" src={nav_logo} />
          </div>
          <ul
            className={
              first
                ? "nav_show d-flex gap-4 align-items-center"
                : "nav_show d-flex showw gap-4 mb-0 align-items-center"
            }
          >
            <li>
              <Link to="/" className="text-white home mb-0">
                Home
              </Link>
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
            <li>
              <Link to="/about" className="text-white home mb-0">
                About
              </Link>
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
            <li>
              <Link to="/work" className="text-white home mb-0">
                Work
              </Link>
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
            <li>
              <Link to="/" className="text-white home mb-0">
                {text_change}
              </Link>
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
            {children}
            <li className="d-block d-xl-none">
              <button className="Cart_btn text-white home mb-0">Cart</button>
            </li>
            <li className="d-block d-xl-none">
              <button className="Pages_btn text-truncate home mb-0 ms-xl-4">
                All Pages
              </button>
            </li>
          </ul>
          <ul className="mb-0 d-none d-xl-block">
            <button className="Cart_btn text-white home mb-0">Cart</button>
            <button className={`Pages_btn home mb-0 ms-4 ${text_clr}`}>
              All Pages
            </button>
          </ul>
          <div className="z_10 d-xl-none">
            <h3 className="text-white fs-1" onClick={clickshow}>
              <BiMenu />
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Mynav;
