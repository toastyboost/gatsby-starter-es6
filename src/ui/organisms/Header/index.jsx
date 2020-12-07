import * as React from "react";

import { Logo, Link } from "~/ui/atoms";
import { Menu, Popup } from "~/ui/molecules";

const headerData = [
  {
    slug: "#footer",
    caption: "Anchor",
  },
  {
    slug: "404",
    caption: "404 page",
  },
];

export const Header = () => {
  const [isHidden, setVisibility] = React.useState(true);

  return (
    <HeaderContainer>
      <Wrapper>
        <Logo />
        <Menu data={headerData} />
        <Link onClick={() => setVisibility(!isHidden)}>Popup Window</Link>
      </Wrapper>
      <Popup isOpen={isHidden} toggle={setVisibility}>
        Popup Content
      </Popup>
    </HeaderContainer>
  );
};

import styled from "styled-components";

import { Wrap } from "~/styles";

const HeaderContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 12px;
`;

const Wrapper = styled(Wrap)`
  display: flex;
  align-items: center;
`;
