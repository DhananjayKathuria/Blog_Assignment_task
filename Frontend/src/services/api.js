import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const getPosts = async () => {
  //   const response = await fetch(`${API_URL}/posts/`);
  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }
  //   console.log(response);
  //   return await response.json();
  const response = await axios.get(`${API_URL}/posts/`);
  return response.data;
};

export const getPost = async (id) => {
  const response = await axios.get(`${API_URL}/posts/${id}/`);
  //   const response = await fetch(`${API_URL}/posts/${id}/`);
  return response.data;
};

export const createPost = async (post, token) => {
  const response = await axios.post(`${API_URL}/posts/`, post, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getComments = async (postId) => {
  const response = await axios.get(`${API_URL}/posts/${postId}/comments/`);
  return response.data;
};

export const createComment = async (postId, comment, token) => {
  const response = await axios.post(
    `${API_URL}/posts/${postId}/comments/`,
    comment,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
