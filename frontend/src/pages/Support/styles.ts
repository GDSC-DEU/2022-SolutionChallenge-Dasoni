import styled from "styled-components";

export const Title = styled.div`
  padding: 12px 24px;

  font-family: "Roboto";
  font-weight: 400;
  line-height: 20px;
`;

export const ListWrap = styled.section`
  padding: 0 16px;

  .filter {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 2px 0;
  }

  .list {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
  }
`;
