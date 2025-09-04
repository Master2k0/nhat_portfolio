import { createRoot } from "react-dom/client";
import "./styles.css";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import ResponsiveProvider from "./hooks/responsive.provider";
import { GlobalContext } from "./context/global-context";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
createRoot(document.getElementById("root")!).render(
  <ResponsiveProvider>
    <Analytics />
    <SpeedInsights />
    <GlobalContext>
      <RouterProvider router={router} />
    </GlobalContext>
  </ResponsiveProvider>,
);
