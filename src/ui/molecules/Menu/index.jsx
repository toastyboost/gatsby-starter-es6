import * as React from "react";
import styled from "styled-components";
import { Link, Anchor } from "~/ui/atoms";

import { MenuContainer, MenuLink, AnchorLink } from "./styles";
 
export const Menu = ({ className, data }) => {
  return (
    <MenuContainer className={className}>
      {data.map(({ slug, caption }, key) => {
        const linkProps = {
          to: slug,
          children: caption,
          key,
        };
        return slug.includes("#") ? <AnchorLink {...linkProps} /> : <MenuLink {...linkProps} />;
      })}
    </MenuContainer>
  );
};

 
 

const MenuContainer = styled.div`
  display: flex;
`;

const MenuLink = styled(Link)`
  margin: 0 16px;
`;

const AnchorLink = styled(Anchor)`
  margin: 0 16px;
`;
