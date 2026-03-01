import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { CreateProjectPage } from "./pages/CreateProjectPage";
import { OutlinePage } from "./pages/OutlinePage";
import { EditorPage } from "./pages/EditorPage";
import { BrandKitPage } from "./pages/BrandKitPage";
import { PricingPage } from "./pages/PricingPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/create",
    element: <CreateProjectPage />,
  },
  {
    path: "/outline/:id",
    element: <OutlinePage />,
  },
  {
    path: "/editor/:id",
    element: <EditorPage />,
  },
  {
    path: "/brand-kit",
    element: <BrandKitPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
