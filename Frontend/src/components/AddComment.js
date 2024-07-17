import React, { useState } from "react";
import { createComment } from "../services/api";

const AddComment = ({ postId, token }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = { text };
    await createComment(postId, comment, token);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Comment</h2>
      <textarea
        placeholder="Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddComment;
