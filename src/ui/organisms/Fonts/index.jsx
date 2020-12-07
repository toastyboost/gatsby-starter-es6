import * as React from "react";

import { Translate } from "~/libs/translate";
 
export const Fonts = () => {
  return (
    <TextContainer>
      <Wrapper>
        <Content>
          <TextMerriweather>
            <Title as="h2">
              <Translate id="hello" /> Merriweather
            </Title>
            While some grotesks distort their letterforms to force a rigid rhythm, Roboto doesn’t compromise, allowing
            letters to be settled into their natural width. This makes for a more natural reading rhythm more commonly
            found in humanist and serif types.
          </TextMerriweather>
          <TextRoboto>
            <Title as="h2">
              <Translate id="hello" /> Roboto
            </Title>
            Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same
            time, the font features friendly and open curves.
          </TextRoboto>
        </Content>
        <Scrollable />
      </Wrapper>
    </TextContainer>
  );
};

import styled from "styled-components";

import { MEDIA } from "~/libs/media";
import { Wrap } from "~/styles";

const TextContainer = styled.div`
  font-size: 1.6rem;
`;

const Wrapper = styled(Wrap)`
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  width: 100%;
  margin-bottom: 16px;
`;

const Block = styled.div`
  margin: 16px;
  border: 1px solid var(--border-color);
  padding: 32px;

  ${MEDIA.PHONE`
    width: calc(100% - 32px);
  `}

  ${MEDIA.DESKTOP`
    width: calc(50% - 32px);
  `};
`;

const TextMerriweather = styled(Block)`
  font-family: var(--title-font);
`;

const TextRoboto = styled(Block)`
  font-family: var(--main-font);
`;

const Scrollable = styled.div`
  min-height: 2000px;
  width: calc(100% - 32px);
  border: 1px solid var(--border-color);
  margin: 16px;
`;
