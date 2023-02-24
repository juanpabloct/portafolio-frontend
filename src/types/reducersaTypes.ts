import { UsersAddress } from "./responseLoginUser";

export interface InitialStateSession {
  loading: boolean;
  user: UsersAddress;
  haveUser: boolean;
  correct: Correct;
}

export interface Correct {
  isCorrect: boolean;
  message: string;
  show?: boolean;
}
