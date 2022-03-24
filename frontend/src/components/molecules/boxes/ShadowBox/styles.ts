import styled from "styled-components";

export const ShadowBoxWrap = styled.div<{
  align?: string;
}>`
  background-color: #fff;
  border-radius: 12px;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.48))
    drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.12));
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || ""};
`;
