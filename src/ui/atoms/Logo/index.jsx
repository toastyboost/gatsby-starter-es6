import * as React from "react";
import { Link } from "../Link";
import styled from "styled-components";

import LogoSVG from "~/static/logo.svg";

export const Logo= ({ className }) => (
  <LogoContainer className={className}>
    <Link to="/">
      <LogoImg src={LogoSVG} />
    </Link>
  </LogoContainer>
);
 

const LogoContainer = styled.div`
  width: 32px;
  height: 32px;

  &:hover {
    opacity: 0.8;
  }
`;

const LogoImg = styled.img`
  width: 100%;
  height: auto;
`;
