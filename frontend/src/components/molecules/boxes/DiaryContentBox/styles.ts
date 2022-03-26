import styled from "styled-components";

export const DiaryContentBoxWrap = styled.div<{
  emotion: string;
  checked?: boolean;
}>`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.48), 0px 0px 4px rgba(0, 0, 0, 0.12);
  padding: 16px 8px;

  display: grid;
  grid-template-columns: 60px 1fr 24px;
  grid-gap: 10px;
  margin-bottom: 12px;

  ${(props) =>
    props.checked &&
    `& {
    background-color: #ffeae8;
  }`}
  .left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 4px;

    .mood-icon {
      width: 44px;
      height: 44px;
      margin-bottom: 6px;
    }
    .date {
      padding: 4px;
      border-radius: 3px;

      font-family: "Roboto";
      font-weight: 700;
      font-size: 12px;
      font-size: 10px;
      line-height: 12px;

      text-align: center;
      color: #ffffff;

      background: ${(props) => props.theme.moodColor[props.emotion]};
    }
  }

  .center {
    border-left: 0.5px solid #9b9b9b;
    padding: 4px 0 4px 10px;
    font-family: "Roboto";

    .title {
      font-weight: 600;
      line-height: 125%;
      margin-bottom: 8px;
    }
    .content {
      font-weight: 400;
      font-size: 14px;
      line-height: 143%;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    .menu-button {
      width: 24px;
      height: 24px;
    }
    .warning-button {
      width: 20px;
      height: 20px;
      display: none;

      ${(props) => props.checked && `display: block;`}
    }
  }
`;
