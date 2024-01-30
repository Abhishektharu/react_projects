import React, { createElement, useImperativeHandle } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Layout from "./Layout.jsx";
import Contact from "./Contact/Contact.jsx";
import Feature from "./Feature/Feature.jsx";
import User from "./User/User.jsx";
import Github from "./Github/Github.jsx";
import GithubAccoutLoader from "./Github/GithubAccoutLoader.jsx";

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/feature" element={<Feature />} />
      {/* <Route path='github' element={<Github />}/>
       */}
      <Route loader={GithubAccoutLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
