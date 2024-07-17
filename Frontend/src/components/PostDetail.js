import React, { useEffect, useState } from "react";
import { getPost, getComments } from "../services/api";
import AddComment from "./addComment";

const PostDetail = ({ match }) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const post = await getPost(match.params.id);
      setPost(post);
      const comments = await getComments(match.params.id);
      setComments(comments);
    };
    fetchData();
  }, [match.params.id]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <AddComment postId={match.params.id} />
    </div>
  );
};

export default PostDetail;
