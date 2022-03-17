import styled from "styled-components";

export const DiaryPostFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px 16px;

  textarea {
    width: 100%;
    height: 120px;
    resize: none;

    border: 0.5px solid #c2c2c2;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 12px 16px;
    margin-top: 10px;

    font-family: Pretendard;
    font-size: 14px;
    line-height: 140%;
    color: #616161;
  }

  .button-wrap {
    display: flex;
    justify-content: center;
  }
`;

export const InputLabel = styled.label`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  margin-bottom: 20px;
`;

export const CheckBoxLabel = styled.label`
  font-family: Pretendard;
  font-size: 14px;
  line-height: 140%;
  display: flex;
  justify-content: center;

  margin-bottom: 12px;
`;

export const MoodBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 10px;

  margin-top: 10px;
  padding: 6px 12px;
  background: #f7f7f7;
  border-radius: 8px;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.48))
    drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.12));
`;
export const MoodItem = styled.button`
  padding: 2px 9px;

  background: #c4c4c4;
  border-radius: 9px;
  border: none;

  font-family: Montserrat;
  font-weight: 600;
  font-size: 10px;
  line-height: 140%;

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 2px;
  }
`;
