import { Action } from "../actions/index";
import { UserType } from "../actions/type";

export interface User {
  username: string;
  email: string;
  userId: any;
}

interface State {
  users: User[];
  error: string | null;
}

const initialState = {
  users: [],
  error: null,
};

const reducers = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case UserType.GET_USER_REQUEST:
      return {
        ...state,
      };

    case UserType.GET_USER_SUCCESS:
      return { ...state, users: action.payload, error: null };

    case UserType.GET_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducers;
