import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const LikePost = ({ post}) => {
  const [userLiked, setUserLiked] = useState(false);
  const userId = useSelector((state) => state.user.userId)

  useEffect(() => {
    if (post.likers) {
      if (post.likers.includes(userId)) {
        setUserLiked(true);
      } else {
        setUserLiked(false);
      }
    }
  }, [post.likers, userId]);

  const likePost = () => {
    axios.patch(`http://localhost:3000/post/like-post/${post._id}`, { userId })
      .then(() => setUserLiked(true))
      .catch((error) => {
        console.error("Error liking post:", error);
      });
  };

  const dislikePost = () => {
    axios.patch(`http://localhost:3000/post/dislike-post/${post._id}`, { userId })
      .then(() => setUserLiked(false))
      .catch((error) => {
        console.error("Error disliking post:", error);
      });
  };

  return (
    <div className="like-icon">
      <p>{post.likers ? post.likers.length : 0}</p>
      {userLiked ? (
        <span id="like-btn" onClick={dislikePost}>
          &#9829;
        </span>
      ) : (
        <span id="dislike-btn" onClick={likePost}>
          &#9829;
        </span>
      )}
    </div>
  );
};

export default LikePost;
