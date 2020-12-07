import * as React from "react";

 

const todayYear = new Date().getFullYear();

export const Footer = () => {
  return <Container id="footer">© 2013 – {todayYear}</Container>;
};

import styled from "styled-components";

const Container = styled.footer`
  margin-top: 24px;
  border-top: 1px solid var(--border-color);
  padding: 24px;
  text-align: center;
`;

 
