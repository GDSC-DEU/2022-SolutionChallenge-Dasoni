import styled from "styled-components";

export const DiaryPostFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  padding: 18px 16px;
`;

export const InputLabel = styled.label<{ flexDirection: "row" | "column" }>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  ${(props) => props.flexDirection === "row" && "align-items: center"};

  margin-bottom: 24px;

  font-family: "Roboto";
  font-weight: 400;
  line-height: 150%;

  .label {
    font-weight: 700;
    line-height: 125%;
    ${(props) => props.flexDirection === "row" && "margin-right: 32px;"}
    ${(props) => props.flexDirection === "column" && "margin-bottom: 12px;"}
  }
`;

export const CheckBox = styled.div`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  color: #9b9b9b;
`;

export const MoodBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 12px;

  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.48), 0px 0px 4px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`;
export const MoodItem = styled.button<{ clicked: boolean }>`
  padding: 8px;
  border-radius: 8px;
  border: none;
  background: none;
  cursor: pointer;
  ${(props) => props.clicked && "background: #FFD4CE;"}

  img {
    width: 44px;
    height: 44px;
  }
`;
