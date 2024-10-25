import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DetailGamesPage from "./pages/detailgames.jsx";
import ErrorPage from "./pages/error.jsx";
import GamesPage from "./pages/games.jsx";
import HomePage from "./pages/home.jsx";
import MoviesPage from "./pages/movies.jsx";
import NewsPage from "./pages/news.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/games",
      element: <GamesPage />,
    },
    {
      path: "/movies",
      element: <MoviesPage />,
    },
    {
      path: "/news",
      element: <NewsPage />,
    },
    {
      path: "/detail-game/:id",
      element: <DetailGamesPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
