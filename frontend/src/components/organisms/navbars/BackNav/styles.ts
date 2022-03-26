import styled from "styled-components";

export const BackNavWrap = styled.nav<{ type: string }>`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .title {
    flex: 1;
    text-align: center;
    font-family: "Roboto";
    font-weight: 600;
    font-size: 18px;
    line-height: 111%;
  }

  .back_button {
    position: absolute;
    left: 16px;
  }

  .detail_button {
    position: absolute;
    right: 16px;
    display: none;

    ${(props) => props.type === "detailmenu" && "display: block"}
  }
`;
