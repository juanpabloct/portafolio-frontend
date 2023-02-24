import { useSelector } from "react-redux";
import { StoreTypes } from "../types/storeTypes";

export const useSession = () =>
  useSelector((state: StoreTypes) => {
    return state.session;
  });
