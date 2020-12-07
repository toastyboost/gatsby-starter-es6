import * as React from "react";
import styled from "styled-components";
import { Link as IntlLink } from "gatsby-plugin-intl";

import { RouterLink, ExternalLink } from "./styles";

export const Link = ({ children, className, activeClassName, to = "", target, onClick }) => {
  const internal = to && /^\/(?!\/)/.test(to);

  return internal ? (
    <RouterLink className={className} to={to} activeClassName={activeClassName} onClick={onClick}>
      {children}
    </RouterLink>
  ) : (
    <ExternalLink className={className} href={to} target={target} onClick={onClick}>
      {children}
    </ExternalLink>
  );
};

const RouterLink = styled(IntlLink)`
  &:hover {
    color: var(--link-hover);
  }

  &[aria-current="page"] {
    color: var(--link-active);
  }
`;

const ExternalLink = styled.a`
  &:hover {
    color: var(--link-hover);
  }
`;
