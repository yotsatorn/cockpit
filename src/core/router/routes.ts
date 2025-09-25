import type { RouteObject } from "react-router";
import { authRoutes } from "@/features/auth/routes";
import { menuRoutes } from "@/features/mainMenu/routes";
import { vehicleInspectionRoutes } from "@/features/VehicleInspection/routes";
import RootLayout from "../layouts/RootLayout";
// import { lazy } from "react";
// import RootLayout from "@/shared/components/layout/RootLayout";

// const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'));
// const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export const routes: RouteObject[] = [
  {
    path: "/",
    // element: <RootLayout />,
    Component: RootLayout,
    // errorElement: <ErrorPage />,
    children: [
      ...authRoutes,
      ...menuRoutes,
      ...vehicleInspectionRoutes,
      //   {
      //     path: ROUTES.LOGIN,
      //     element: <LoginPage />,
      //       --- or ---
      //     lazy: () => import("../features/auth/pages/LoginPage"),
      //   },
      // Catch all
      //   {
      //     path: "*",
      //     element: <NotFoundPage />,
      //   },
    ],
  },
];
