import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import App from "./App";
import Greeting from "./components/Greeting";
import ListPosts from "./components/blogs/ListPosts";
import CreatePost from "./components/blogs/CreatePost";
import ViewPost from "./components/blogs/ViewPost";
import EditPost from "./components/blogs/EditPost";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import React from 'react';


const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'greeting/:name', element: <Greeting/>},
    { path: 'blog/posts', element: <ListPosts/>},
    { path: 'blog/posts/create', element: <CreatePost/>},
    { path: 'blog/posts/:postId', element: <ViewPost/>},
    { path: 'blog/posts/:postId/edit', element: <EditPost/>},
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>}
]);

export default router;