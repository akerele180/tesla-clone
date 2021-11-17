import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderNavigation>
      <LogoContainer>
        <Link to="/">
          <img src="/images/logo.svg" alt="this is the logo" />
        </Link>
      </LogoContainer>
      <MiddleContainer>
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
          <Link to="/">Solar Panels</Link>
        </li>
      </MiddleContainer>
      <EndContainer>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/">Account</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
      </EndContainer>
      <Hamburger>
        <li>
          <Link to="/">Menu</Link>
        </li>
      </Hamburger>
    </HeaderNavigation>
  );
}
const HeaderNavigation = styled.nav`
  position: fixed;
  top: 20px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  align-items: center;
  width: 94vw;
  margin: 0 auto;
  left: 0;
  right: 0;
  @media screen and (min-width: 1013px) {
    width: 90vw;
  }
`;
const LogoContainer = styled.div`
  cursor: pointer;
`;
const MiddleContainer = styled.ul`
  display: flex;
  list-style-type: none;
  li {
    padding: 3px 15px;
    line-height: 1.8rem;
    cursor: pointer;
    transition: all ease-in-out 0.4s;
    border-radius: 8px;
    &:hover {
      background-color: #171a202c;
      transition: background-color ease-in-out 0.5s;
    }
    a {
      text-decoration: none;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 1013px) {
    display: none;
  }
`;
const EndContainer = styled.ul`
  display: flex;
  list-style-type: none;
  li {
    padding: 3px 15px;
    line-height: 1.8rem;
    cursor: pointer;
    transition: background-color ease-in-out 0.5s;
    border-radius: 8px;
    &:hover {
      background-color: #171a202c;
      transition: background-color ease-in-out 0.5s;
    }
    a {
      text-decoration: none;
      font-weight: 600;
    }
  }
  /* li:last-of-type {
    padding-right: 0px;
  } */
  @media screen and (max-width: 1013px) {
    display: none;
  }
`;
const Hamburger = styled.div`
  @media screen and (min-width: 1013px) {
    display: none;
  }
  li {
    padding: 3px 15px;
    line-height: 1.8rem;
    cursor: pointer;
    transition: all ease-in-out 0.4s;
    border-radius: 8px;
    list-style-type: none;
    background-color: #171a202c;
    a {
      text-decoration: none;
      font-weight: 600;
    }
  }
`;
