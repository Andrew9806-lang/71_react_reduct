import { createAppSlice } from "store/createAppSlice"
import { LikeStateSlice } from "./type"

export const likeInitialState: LikeStateSlice = {
  like: 0,
  dislike:0,
}
export const likeSlice = createAppSlice({
  name: "LIKE",
  initialState: likeInitialState,
  reducers: create => ({
    like: create.reducer((state: LikeStateSlice) => {
      state.like = state.like + 1
    }),
    dislike: create.reducer((state: LikeStateSlice) => {
      state.dislike = state.dislike + 1
    }),
    reset:create.reducer((state:LikeStateSlice)=>{
        state.like=0
        state.dislike=0
    })
    // resetResults: create.reducer(() => feedbackInitialState),
    // tut  prosto verneli sostoyanie iznachalnoe
  }),
  selectors: {
    likeValue: (state: LikeStateSlice) => state.like,
    dislikeValue: (state: LikeStateSlice) => state.dislike,
  },
//   FeedBackData:(state)=> state
})

export const LikeAction=likeSlice.actions;
export const likeSelectors=likeSlice.selectors;
