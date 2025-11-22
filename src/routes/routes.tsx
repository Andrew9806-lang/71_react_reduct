
import RandomJokes from "Components/RondomJokes/RandomJokes"
import Lesson17 from "../lesson/Lesson17/Lesson17"
import Home from "../pages/Home/Home"

import type { RoutePage } from "./types"

export const routesData: RoutePage[] = [
  { path: "/", element: <Home /> },
  { path: "/lesson17", element: <Lesson17 /> },
  { path: "/lesson18", element: <RandomJokes /> },
  { path: "*", element: "Page not found" },
]

