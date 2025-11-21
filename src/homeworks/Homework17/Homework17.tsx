import Feedback from "Components/FeedBack/FeedBack"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { LikeAction, likeSelectors } from "store/feedback/feedbackSlice"
import { Homework17Wrapper } from "./style"


function Homework17() {
  const dispatch = useAppDispatch()
  const like = useAppSelector(likeSelectors.likeValue)
  const dislike = useAppSelector(likeSelectors.dislikeValue)

  const onLike = () => {
    dispatch(LikeAction.like())
  }
  const onDislike = () => {
    dispatch(LikeAction.dislike())
  }
  const reset = () => {
    dispatch(LikeAction.reset())
  }
  return (
    <Homework17Wrapper>
      <Feedback
        like={like}
        dislike={dislike}
        addLike={onLike}
        reset={reset}
        addDislike={onDislike}
      />
    </Homework17Wrapper>
  )
}
export default Homework17
