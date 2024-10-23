import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DetailGames from "./pages/detailgames.jsx";
import Games from "./pages/games.jsx";
import Home from "./pages/home.jsx";
import Movies from "./pages/movies.jsx";
import News from "./pages/news.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/games",
      element: <Games />,
    },
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/detail-game/:id",
      element: <DetailGames />,
    },
  ],
  { basename: "/QuestForGame-1.5/" }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
