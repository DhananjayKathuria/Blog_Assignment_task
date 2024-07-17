import React, { useState } from "react";
import { createPost } from "../services/api";

const AddPost = ({ token }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, content };
    await createPost(post, token);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPost;
