import Button from "Components/Button/Button"
import {
  ButtonWrapper,
  JokesContainer,
  JokeText,
  RandomJokesWrapper,
  Spinner,
  Error,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomJokesAction,
  randomJokesSelectors,
} from "redux/RandomJokes/RandomJokesSlice"

function RandomJokes() {
  const { data, error, status } = useAppSelector(randomJokesSelectors.jokeData)
  const dispatch = useAppDispatch()
  const getJoke = () => {
    dispatch(randomJokesAction.getJoke())
  }
  return (
    <RandomJokesWrapper>
      <ButtonWrapper>
        <Button name="Get Jokes" onClick={getJoke} />
      </ButtonWrapper>
      {status === "loading" && <Spinner />}
      <JokesContainer>
        <JokeText>{data}</JokeText>
      </JokesContainer>
      {status === "error" && <Error>{error}</Error>}
    </RandomJokesWrapper>
  )
}
export default RandomJokes
