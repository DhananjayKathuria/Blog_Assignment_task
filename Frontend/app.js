import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import PostList from "./src/components/postList";
import PostDetail from "./src/components/postDetail";
import AddPost from "./src/components/addPost";

const Applayout = () => {
  return (
    <div className="app">
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <PostList />,
      },
      {
        path: "/posts/:id",
        element: <PostDetail />,
      },
      //   {
      //     path: "/add-post",
      //     element: <addPost token={token} />,
      //   },
    ],
    // errorElement <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
