import * as React from "react";
import styled from "styled-components";

import {
  //
  AsideBackground,
  Aside,
  AsideHeader,
  AsideBurger,
  AsideContent,
} from "./styles";
 

export const Sidebar  = ({ className, isVisible, toggler }) => {
  return (
    <>
      <AsideBackground
        aria-visible={isVisible}
        className={className}
        onClick={() => toggler(!isVisible)}
      />
      <Aside isVisible={isVisible}>
        <AsideHeader>
          <AsideBurger isVisible={isVisible} onClick={() => toggler(!isVisible)} />
        </AsideHeader>
        <AsideContent>Content</AsideContent>
      </Aside>
    </>
  );
};

import { Burger } from "~/ui/atoms";
import { MEDIA } from "~/libs/media";
import { FixedBackground } from "~/styles";

const AsideBackground = styled(FixedBackground)``;

export const Aside = styled.aside`
  opacity: ${(p) => (p.isVisible ? "1" : "0")};
  visibility: ${(p) => (p.isVisible ? "inherit" : "hidden")};
  transform: translateX(${(p) => (p.isVisible ? "0" : "-300px")});
  position: fixed;
  left: 0;
  top: 0;
  max-width: 286px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  transition: all 0.25s ease-in-out;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
  z-index: 1004;
  background-color: #fff;

  ${MEDIA.PHONE`
    display: block;
  `}

  ${MEDIA.DESKTOP`
    display: none;
  `};
`;

const AsideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 36px);
  padding: 16px 0 15px 0;
  margin: 0 18px;
  border-bottom: 1px solid var(--border-color);
`;

const AsideBurger = styled(Burger)``;

const AsideContent = styled.div`
  padding: 24px 18px;
  display: flex;
  flex-wrap: wrap;

  span {
    display: block;
    margin: 12px 0;
    font-size: 1.6rem;
  }
`;
