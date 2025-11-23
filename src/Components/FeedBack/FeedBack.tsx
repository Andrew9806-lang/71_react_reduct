import { useAppDispatch, useAppSelector } from "store/hooks"
import Button from "../Button/Button"

import {
  FeedbackContainer,
  FeedbackResultsContainer,
  LikeDislikeContainer,
  Result,
} from "./style"
import {
  feedbackActions,
  feedbackSelectors,
} from "store/feedback/feedbackSlice"

function Feedback() {
  const { likeCount, dislikeCount } = useAppSelector(
feedbackSelectors.feedbackData,
  )

  const dispatch = useAppDispatch()

  const addLike = () => {
    dispatch(feedbackActions.addLike())
  }

  const addDislike = () => {
    dispatch(feedbackActions.addDislike())
  }

  const resetResults = () => {
    dispatch(feedbackActions.resetResults())
  }

  return (
    <FeedbackContainer>
      <FeedbackResultsContainer>
        <LikeDislikeContainer>
          <Result>{likeCount}</Result>
          <Button name="LIKE" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>{dislikeCount}</Result>
          <Button name="DISLIKE" onClick={addDislike} />
        </LikeDislikeContainer>
      </FeedbackResultsContainer>
      <Button name="RESET RESULTS" onClick={resetResults} />
    </FeedbackContainer>
  )
}

export default Feedback
