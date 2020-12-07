import React, { useEffect } from "react";
import { compose } from "redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Wrap } from "~/styles";

import { Loader } from "~/ui/atoms";
import { withUsers } from "~/store/hocs";

import { AsyncContainer, Wrapper, Title, Content, ListItem } from "./styles";

const Block = ({ getAllUsers, usersData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { data } = usersData;

  return (
    <AsyncContainer>
      <Wrapper>
        <Content>
          <Title as="h1">Async Data</Title>
          {data ? (
            data.map(({ email }, key) => (
              <ListItem key={key}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                {email}
              </ListItem>
            ))
          ) : (
              <Loader />
            )}
        </Content>
      </Wrapper>
    </AsyncContainer>
  );
};

export const Async = compose(withUsers);

const AsyncContainer = styled.div`
  font-size: 1.6rem;
`;

const Wrapper = styled(Wrap)`
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px;
  width: 100%;
  border: 1px solid var(--border-color);
  padding: 32px;
`;

const Title = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

const ListItem = styled.div`
  width: 100%;
`;



