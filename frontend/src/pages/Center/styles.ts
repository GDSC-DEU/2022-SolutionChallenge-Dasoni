import styled from "styled-components";

export const CenterWrap = styled.div`
  height: calc(100vh - 56px);
  margin-top: 56px;
  overflow: hidden;
`;

export const Search = styled.section`
  padding: 12px 16px;
  background: #fff;
`;

export const MapWrap = styled.section`
  height: calc(100vh - 120px);
`;

export const CenterListWrap = styled.section`
  position: absolute;
  z-index: 100;
  top: 50vh;
  width: 100%;
  height: 50vh;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background: #ffffff;
  border-radius: 12px 12px 0px 0px;

  &::-webkit-scrollbar {
    display: none;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: "Roboto";
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 5px;
    cursor: pointer;
    color: #9b9b9b;

    img {
      width: 24px;
      height: 24px;
    }
  }

  .list-wrap {
  }
`;
