import { UserType } from "./../actions/type";
import { Action } from "./../actions/index";
import { Dispatch } from "redux";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";

export const fetchUser = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: UserType.GET_USER_REQUEST,
  });
  try {
    let data: any;
    const dbRef = ref(db, "/users/data");
    onValue(dbRef, (snapshot) => {
      data = snapshot.val();
    });

    // console.log(data);
    dispatch({
      type: UserType.GET_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: UserType.GET_USER_FAIL,
      payload: err,
    });
    console.log(err);
  }
};
