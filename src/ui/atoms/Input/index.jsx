import * as React from "react";
import styled from "styled-components";

export const Input = ({ value, placeholder, isInvalid, onChange }) => (
  <FieldContainer>
    <Field value={value} placeholder={placeholder} aria-invalid={isInvalid} onChange={onChange} />
  </FieldContainer>
);

const FieldContainer = styled.div``;

const Field = styled.input`
  &[aria-invalid="true"] {
    border: 1px solid var(--warning);
  }
`;
