// import React from "react";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/HomePage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import VideoPage from "./pages/VideoPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import WatchListPage from "./pages/WatchListPage.jsx";
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/playVideo" element={<VideoPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/watchList" element={<WatchListPage />} />
    </Route>
  )
);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
