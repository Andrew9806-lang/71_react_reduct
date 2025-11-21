import styled from "@emotion/styled";


interface CounterProps {
  primary?: boolean;
}

export const CounterWrapper = styled.div<CounterProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* tut nado razobrat */
  gap: 20px;
  min-width: 400px;
  padding: 20px;
  background-color: ${({ primary }) => (primary ? "red" : "white")};
  border: 2px solid red;
  border-radius: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const ResultContainer = styled.div<CounterProps>`
  font-size: 28px;
  font-weight: bold;
  color: ${({ primary }) => (primary ? " rgb(15, 44, 72)" : "red")};
`;
//osjdiqd
