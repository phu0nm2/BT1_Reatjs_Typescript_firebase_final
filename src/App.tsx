import React from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { fetchUser } from "./store/actionCreators";
import { State } from "./store";

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: State) => state.reducers);

  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <div className="user">
        <h1>Thông tin user:</h1>
      </div>
      {user?.users?.map((item, i) => (
        <div key={i}>
          <h2>{item.username}</h2>
          <h3>{item.email}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
