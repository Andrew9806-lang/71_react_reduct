
import Homework17 from "homeworks/Homework17/Homework17"
import Lesson17 from "../lesson/Lesson17/Lesson17"
import Home from "../pages/Home/Home"

import type { RoutePage } from "./types"

export const routesData: RoutePage[] = [
  { path: "/", element: <Home /> },
  { path: "//lesson17", element: <Lesson17 /> },
  {path:"//homework17",element: <Homework17 />},
  { path: "*", element: "Page not found" },
]
