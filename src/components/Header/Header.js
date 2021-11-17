import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";

export default function Header() {
  const [close, setClose] = useState(false);

  function toggleBar() {
    setClose(true);
  }
  function unToggleBar() {
    setClose(false);
  }

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
          <Link to="/" onClick={toggleBar}>
            Menu
          </Link>
        </li>
      </Hamburger>

      <RightMenuBar show={close}>
        <CloseWrapper>
          <RiCloseFill
            onClick={unToggleBar}
            style={{
              cursor: "pointer",
            }}
          />
        </CloseWrapper>
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
      </RightMenuBar>
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
  @media screen and (min-width: 1053px) {
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
  @media screen and (max-width: 1053px) {
    display: none;
  }
`;
const Hamburger = styled.div`
  @media screen and (min-width: 1053px) {
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

const RightMenuBar = styled.ul`
  background-color: #ffffff;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: transform ease-in-out 0.5s;
  width: 300px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  padding: 20px 40px 20px 20px;

  p {
    padding: 20px;
  }
  li {
    list-style-type: none;
    padding: 10px 25px;
    &:hover {
      background-color: #171a202a;
      cursor: pointer;
      transition: all ease-in-out 0.4s;
      border-radius: 8px;
    }
    a {
      text-decoration: none;
      text-transform: capitalize;
      font-weight: bold;
    }
  }
  span {
    display: inline-block;
    padding: 20px;
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
  margin-bottom: 15px;
`;
