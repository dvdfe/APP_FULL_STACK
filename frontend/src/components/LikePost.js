import axios from "axios";
import React from "react";

const LikePost = ({ post, userId }) => {

    const likePost = () => {
        axios.patch("http://localhost:3000/post/like-post/" + post._id, {userId})
    }
  return (
    <div className="like-icon">
      <p>{post.likers ? post.likers.length : 0}</p>
      <span id="dislike-btn" onClick={likePost()}>&#9829;</span>
    </div>
  );
};

export default LikePost;
