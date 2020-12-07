import * as React from "react";
import styled from "styled-components";

export const Burger = ({ className, isVisible, onClick }) => {
  return (
    <StyledBurgerContainer className={className} onClick={onClick}>
      <StyledBurgerBox>
        <StyledBurgerInner isActive={isVisible} />
      </StyledBurgerBox>
    </StyledBurgerContainer>
  );
};

const width = 25;
const height = 3;
const radius = 10;
const theme = "#000";

const StyledBurgerContainer = styled.div`
  position: relative;
  top: -1px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledBurgerBox = styled.div`
  width: 36px;
  height: 36px;
  display: inline-block;
  position: relative;
`;

const StyledBurgerInner = styled.div`
  display: block;
  top: 50%;
  transform: ${(p) => (p.isActive ? "rotate(-45deg)" : "rotate(0deg)")};
  width: ${width}px;
  height: ${height}px;
  background-color: ${theme};
  border-radius: ${radius}px;
  position: absolute;
  transition: 0.2s ease-in-out;

  &:before,
  &:after {
    width: ${width}px;
    height: ${height}px;
    background-color: ${theme};
    border-radius: ${radius}px;
    position: absolute;
  }

  &:before,
  &:after {
    content: "";
    display: block;
  }

  &:before {
    transition: 0.1s linear;
    transition: 0;
    top: ${(p) => (p.isActive ? 0 : "-8px")};
    opacity: ${(p) => (p.isActive ? 0 : 1)};
  }

  &:after {
    bottom: ${(p) => (p.isActive ? 0 : "-8px")};
    transform: ${(p) => (p.isActive ? "rotate(90deg)" : "rotate(0)")};
    transition: 0.2s ease-in-out;
  }
`;