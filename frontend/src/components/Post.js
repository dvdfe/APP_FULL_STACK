import React from 'react';
import LikePost from './LikePost';

const Post = ({post, userId}) => {
    console.log(post, userId)

    const dateFormater = (date) => {
        return new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",

        })
    }
    return (
        <div className="card">
            <div className="card-header">
                <h3>{post.author}</h3>
                <p>posté le {dateFormater(post.createdAt)}</p>
            </div>
            <p>{post.message}</p>
            <div className="icones-part">
                <LikePost post={post} userId={userId}/>
            </div>
        </div>
    );
};

export default Post;