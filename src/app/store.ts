import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import rowSetterReducer from "../features/rowSetter/rowSetterSlice"

export const store = configureStore({
  reducer: {
    row: rowSetterReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
