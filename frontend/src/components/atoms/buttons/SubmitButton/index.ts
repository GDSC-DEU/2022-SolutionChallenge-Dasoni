import styled from "styled-components";

export const SumbitButton = styled.button`
  background: ${(props) => props.theme.mainColor};
  border-radius: 8px;
  border: none;
  color: #ffffff;
  font-family: "Roboto";
  font-weight: 700;
  line-height: 112%;
  padding: 15px;
  cursor: pointer;
`;
