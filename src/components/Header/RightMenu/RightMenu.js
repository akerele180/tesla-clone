import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function RightMenu() {
  return (
    <RightMenuBar>
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
        <Link to="/">Solar Rof</Link>
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
      <li>
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
      <p>United States</p>
      <span>English</span>
    </RightMenuBar>
  );
}

const RightMenuBar = styled.ul`
  span {
    display: inline-block;
  }
  a {
    text-decoration: none;
    text-transform: capitalize;
    font-weight: normal;
  }
`;
