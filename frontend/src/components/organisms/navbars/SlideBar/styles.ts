import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from {
    transform : translateX(100%);
  }
  to {
    transform : translateX(0%);
  }
`;

export const SlideBarWrap = styled.div<{ display: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  right: 0;
  top: 48px;
  width: 70vw;
  height: calc(100vh - 48px);
  max-width: 264px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 24px 33px -9px rgba(0, 0, 0, 0.12);
  border-radius: 12px 0px 0px 12px;

  ${(props) => !props.display && `display: none;`}
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-name: ${slide};

  .profile-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #e6e6e6;

    .profile {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .email {
      flex: 1;
      text-align: center;
      font-family: "Roboto";
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
    }
    .logout {
      width: 24px;
      height: 24px;
    }
  }

  .menu {
    padding: 16px;
    margin: 0;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      list-style: none;
      padding: 14px 8px;
      border-radius: 8px;
      color: #616161;
      cursor: pointer;

      &:hover {
        background: #ffd4ce;
        color: #1f1f1f;
      }

      img {
        width: 20px;
        height: 20px;
        margin-right: 12px;
      }

      span {
        font-family: "Roboto";
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
`;
