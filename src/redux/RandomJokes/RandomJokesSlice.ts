import { createAppSlice } from "store/createAppSlice"
import { RandomJokesSliceState } from "./type"
import axios from "axios"

const randomIntialState: RandomJokesSliceState = {
  data: undefined,
  error: undefined,
  status: "default",
}

export const randomJokesSlice = createAppSlice({
  name: "RANDOM JOKES",
  initialState: randomIntialState,
  reducers: create => ({
    getJoke: create.asyncThunk(
      async (arg, thunkApi) => {
        try {
          const result = await axios.get(
            " https://official-joke-api.appspot.com/random_joke",
          )
          return result.data
          // esli vse horosho to poluchaem shutku
        } catch (error: any) {
          return thunkApi.rejectWithValue(error.message)
          // esli vse ploho deistvie pereidet v rejected
        }
      },
      {
        pending: (state: RandomJokesSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        // pending — вызывается перед началом запроса (обычно меняют status на "loading")
        fulfilled: (state: RandomJokesSliceState, action: any) => {
          state.data = `${action.payload.setup} - ${action.payload.punchline}`
          state.status = "succes"
        },
        // fulfilled — вызывается при успешном завершении (обновляют data, status)
        rejected: (state: RandomJokesSliceState, action: any) => {
          state.error = action.payload
          state.status = "error"
        },
        // rejected — при ошибке (обновляют error, status)
      },
    ),
  }),
  selectors: {
    jokeData: (state: RandomJokesSliceState) => state,
  },
})
export const randomJokesAction = randomJokesSlice.actions
export const randomJokesSelectors = randomJokesSlice.selectors
