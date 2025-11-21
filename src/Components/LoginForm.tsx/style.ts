import styled from "@emotion/styled";
import { css } from "@emotion/react";
const boxBasicStyles = css`
  display: flex;
  flex-direction: column;
`;
export const LoginFormComponent = styled.form`
  ${boxBasicStyles}
  gap: 20px;
  width: 500px;
  padding: 30px;
  background: white;
  border: 1px solid rgba(8, 23, 56, 1);
  border-radius: 10px;
`;
export const Title = styled.div`
  font-size: 30px;
  color: rgba(8, 23, 56, 1);
  font-weight: bold;
`;