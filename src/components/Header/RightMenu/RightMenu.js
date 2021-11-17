import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { BsGlobe2 } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";

export default function RightMenu() {
  return (
    //     <Container>
    <RightMenuBar>
      <li>
        <RiCloseFill
          style={{
            fontSize: 30,
            marginTop: -5,
            marginBottom: 5,
            height: "100%",
            float: "right",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        />
      </li>
      <li></li>
      <li></li>
      <li>
        <Link to="/">Model S</Link>
      </li>
      <li>
        <Link to="/">Model 3</Link>
      </li>
      <li>
        <Link to="/">Model X</Link>
      </li>
      <li>
        <Link to="/">Model Y</Link>
      </li>
      <li>
        <Link to="/">Solar Roof</Link>
      </li>
      <li>
        <Link to="/">solar panels</Link>
      </li>
      <li>
        <Link to="/">Existing inventory</Link>
      </li>
      <li>
        <Link to="/">used inventory</Link>
      </li>
      <li>
        <Link to="/">test drive</Link>
      </li>
      <li>
        <Link to="/">powerwall</Link>
      </li>
      <li>
        <Link to="/">commercial energy</Link>
      </li>
      <li>
        <Link to="/">utilities</Link>
      </li>
      <li>
        <Link to="/">charging</Link>
      </li>
      <li>
        <Link to="/">find us</Link>
      </li>
      <li>
        <Link to="/">support</Link>
      </li>
      {/* <li>
        <Link to="/">investor relations</Link>
      </li>
      <li>
        <Link to="/">shop</Link>
      </li>
      <li>
        <Link to="/">account</Link>
      </li>
      <li>
        <Link to="/">more</Link>
      </li>

      <p>
        <BsGlobe2 style={{ marginRight: 20 }} />
        United States
      </p>
      <span>English</span> */}
    </RightMenuBar>
  );
}

const RightMenuBar = styled.ul`
  background-color: #ffffff;
  width: 300px;
  min-height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  padding: 20px 40px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: grey;
    opacity: 0.5;
  }
  p {
    padding: 20px;
  }
  li {
    list-style-type: none;
    padding: 10px 0;
    a {
      text-decoration: none;
      text-transform: capitalize;
      font-weight: bold;
      /* : right; */
    }
  }
  span {
    display: inline-block;
    padding: 20px;
  }
`;

// const Container = styled.div`

// `;
