import type { RouteObject } from "react-router";
import { lazy } from "react";

const VehicleInspectionPage = lazy(() => import("@/pages/VehicleInspectionPage"))

export const vehicleInspectionRoutes: RouteObject[] = [
  {
    path: "/vehicle-inspection",
    Component: VehicleInspectionPage,
  },
];
