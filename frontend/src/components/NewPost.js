import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPost, getPosts } from "../feature/post.slice";

const Newpost = () => {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  const data = {
    message,
    author: userId,
    _id: Date.now(),
  };

  const handleForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/post/", data);
    dispatch(getPosts());
    setMessage("");
  };

  return (
    <form className="new-post-container" onSubmit={(e) => handleForm(e)}>
      <textarea
        placeholder="Quoi de neuf ?"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default Newpost;
