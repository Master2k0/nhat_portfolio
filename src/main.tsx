import { createRoot } from "react-dom/client";
import "./styles.css";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import ResponsiveProvider from "./hooks/responsive.provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
createRoot(document.getElementById("root")!).render(
  <ResponsiveProvider>
    <RouterProvider router={router} />
    <SpeedInsights />
  </ResponsiveProvider>,
);
