import { User } from "../reducers/userReducer";
import { UserType } from "./type";

interface UserActionRequest {
  type: UserType.GET_USER_REQUEST;
}

interface UserActionSuccess {
  type: UserType.GET_USER_SUCCESS;
  payload: User[];
}

interface UserActionFail {
  type: UserType.GET_USER_FAIL;
  payload: any;
}

export type Action = UserActionRequest | UserActionSuccess | UserActionFail;
