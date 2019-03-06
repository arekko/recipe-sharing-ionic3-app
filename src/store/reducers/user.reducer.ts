import { User } from "../../interfaces/user";
import * as fromUser from "../actions/user.action";
import { Media } from "./../../interfaces/media";

export interface Error {
  error?: string;
  message: string;
}

export interface UserState {
  currentUser: User | null;
  isLoggedIn: boolean;
  bookmarks: Media[];
  token: string | null;
  error: Error | null;
  message: string | null;
}

export const initialState: UserState = {
  currentUser: null,
  isLoggedIn: false,
  bookmarks: [],
  token: null,
  message: null,
  error: null
};

export function reducer(
  state = initialState,
  action: fromUser.UserActions
): UserState {
  switch (action.type) {
    case fromUser.LOGIN_USER:
      return {
        ...state
      };
    case fromUser.LOGIN_USER_SUCCESS:
      if (action.payload.token) {
        return {
          ...state,
          currentUser: action.payload.user,
          token: action.payload.token,
          message: action.payload.message
        };
      }
    case fromUser.LOGIN_USER_FAIL:
      console.log(action.payload);

      return {
        ...state,
        error: action.payload.error
      };
  }

  return state;
}

// selectors
export const getCurrentUser = (state: UserState) => state.currentUser;
export const getUserStatus = (state: UserState) => state.isLoggedIn;
export const getUserToken = (state: UserState) => state.token;
export const getError = (state: UserState) => state.error;