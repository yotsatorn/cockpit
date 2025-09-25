import type { RouteObject } from "react-router";
import MainMenuPage from "@/pages/MainMenuPage";

export const menuRoutes: RouteObject[] = [
  {
    path: "/menu",
    Component: MainMenuPage,
  },
];
