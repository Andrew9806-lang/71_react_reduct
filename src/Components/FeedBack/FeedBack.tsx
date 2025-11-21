import Button from "../Button/Button"
import {
  FeedbackContainer,
  FeedbackResultsContainer,
  LikeDislikeContainer,
  Result,
} from "./style"
import { FeedabackTypes } from "./type"

function Feedback({
  like,
  dislike,
  addLike,
  addDislike,
  reset,
}: FeedabackTypes) {
  return (
    <FeedbackContainer>
      <FeedbackResultsContainer>
        <LikeDislikeContainer>
          <Result>{like}</Result>
          <Button name="LIKE" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>{dislike}</Result>
          <Button name="DISLIKE" onClick={addDislike} />
        </LikeDislikeContainer>
      </FeedbackResultsContainer>
      <Button name="RESET RESULTS" onClick={reset} />
    </FeedbackContainer>
  )
}

export default Feedback
