// Generated by https://quicktype.io

import { Correct } from "./reducersaTypes";
import { UsersAddress } from "./responseLoginUser";

export interface StoreTypes {
  session: Session;
}

export interface Session {
  user: UsersAddress;
  haveUser: boolean;
  loading: boolean;
  correct: Correct;
}