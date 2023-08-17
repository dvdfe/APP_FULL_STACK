import React, { useState } from "react";
import Newpost from "./components/NewPost";
import Thread from "./components/Thread";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./feature/user.slice";

const App = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId]);

  return (
    <div className="app-container">
      <div className="login">
        <h3>Bonjour</h3>
        <input
          type="text"
          placeholder="Pseudo"
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <Newpost/>
      <Thread/>
    </div>
  );
};

export default App;
