import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 16px;
  height: 120px;
  resize: none;
  background: #f0f0f0;
  border-radius: 8px;
  border: none;

  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #1f1f1f;

  &::placeholder {
    color: #9b9b9b;
  }
  &:focus {
    outline: none;
  }
`;
