import * as React from "react";

import { StyledDiaryInput } from "./styles";

export interface DiaryInputProps {
  type: string;
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valid: boolean;
}
function DiaryInput({
  type,
  value,
  placeholder,
  onChange,
  valid,
}: DiaryInputProps) {
  return (
    <StyledDiaryInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      valid={valid}
    />
  );
}

export default DiaryInput;
