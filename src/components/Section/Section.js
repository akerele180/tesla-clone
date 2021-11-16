// import { Fade } from "@mui/material";
import Fade from "react-reveal/Fade";
import React from "react";
import styled from "styled-components";
import "./Section.css";

export default function Section({
  image,
  title,
  description,
  rightBtn,
  leftBtn,
}) {
  return (
    <Wrap image={image}>
      <Fade bottom cascade>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom cascade>
          <ButtonGroup>
            <LeftButton>{leftBtn}</LeftButton>
            {rightBtn && <RightButton>{rightBtn}</RightButton>}
          </ButtonGroup>
        </Fade>

        <DownArrow src="./images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: ${({ image }) => `url("/images/${image}")`};
  background-repeat: no-repeat;
  background-position: center;
`;
const ItemText = styled.div`
  text-align: center;
  padding: 150px 0 0 0;
  p {
    /* padding: 10px 0; */
    line-height: 2rem;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  height: 40px;
  align-items: center;
  margin-bottom: 30px;

  /* meida query */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const LeftButton = styled.div`
  text-transform: uppercase;
  background-color: #171a20;
  font-size: 12px;
  letter-spacing: normal;
  height: 100%;
  width: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  line-height: 14.4px;
  cursor: pointer;
  color: #fff;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    line-height: 40px;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: #393c41;
`;
const DownArrow = styled.img`
  margin-bottom: 5px;
  height: 40px;
  animation: bounce infinite 1.5s;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
