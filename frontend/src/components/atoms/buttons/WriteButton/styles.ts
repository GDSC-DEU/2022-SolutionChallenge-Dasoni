import styled from "styled-components";

export const WriteButtonWrapper = styled.div`
  position: fixed;
  right: 16px;
  bottom: 20px;

  width: 56px;
  height: 56px;
  background: ${(props) => props.theme.mainColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);

  img {
    width: 24px;
    height: 24px;
  }
`;
