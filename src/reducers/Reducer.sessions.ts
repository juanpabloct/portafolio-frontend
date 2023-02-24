import { createSlice } from "@reduxjs/toolkit";
import { Correct, InitialStateSession } from "../types/reducersaTypes";
import { UsersAddress } from "../types/responseLoginUser";

const initialState: InitialStateSession = {
  user: {
    city: "",
    country: "",
    createdAt: "",
    department: "",
    directions: "",
    updatedAt: "",
    id: 0,
    token: "",
  },
  haveUser: false,
  loading: false,
  correct: {
    isCorrect: true,
    message: "",
    show: false,
  },
};
export const reducerSession = createSlice({
  initialState,
  name: "Sesion User",
  reducers: {
    ChangeLoading: (state) => {
      state.loading = true;
    },
    ChangeUser: (state, { payload }) => {
      state.user = payload.user;
      state.correct = payload.correct;
      state.correct.show = true;
    },
    ChangeCorrect: (state, { payload }: { payload: Correct }) => {
      state.correct = payload;
    },
  },
});
export const { ChangeLoading, ChangeUser, ChangeCorrect } =
  reducerSession.actions;
