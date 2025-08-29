import { createRoot } from "react-dom/client";
import "./styles.css";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import ResponsiveProvider from "./hooks/responsive.provider";
import { GlobalContext } from "./context/global-context";
createRoot(document.getElementById("root")!).render(
  <ResponsiveProvider>
    <GlobalContext>
      <RouterProvider router={router} />
    </GlobalContext>
  </ResponsiveProvider>,
);
