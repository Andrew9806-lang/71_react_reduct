import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

export const RandomJokesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 40px;
  background-color: #d7a7c2ff;
`
export const JokesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const JokeText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #590836ff;
`

export const Spinner = styled.div`
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #1f27f5;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
export const ButtonWrapper = styled.div`
  width: 400px;
`

export const Error = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #290419ff;
`
