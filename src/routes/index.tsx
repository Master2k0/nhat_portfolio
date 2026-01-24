import { siteConfig } from "@/configs";
import { Layout } from "@/layouts";
import LayoutV2 from "@/layouts/layout-v2";
import NotFound from "@/pages/not-found/not-found";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";

const publicRoutes: RouteObject[] = [
  {
    index: true,
    async lazy() {
      const { default: HomeNew } = await import("@/pages/home-new");
      return { Component: HomeNew };
    },
    // element: <HomeNew />,
  },
  {
    path: siteConfig.mainPage.about.href,
    async lazy() {
      const { default: AboutMeNew } = await import("@/pages/about-me-new");
      return { Component: AboutMeNew };
    },
  },
];

const projects: RouteObject[] = [
  {
    index: true,
    element: <Navigate to={siteConfig.mainPage.home.href} replace />,
  },
  {
    path: siteConfig.subPage.cloakline.href,
    element: <div>Cloakline - VPN app</div>,
  },
  {
    path: siteConfig.subPage.circa.href,
    async lazy() {
      const { Circa } = await import("@/pages/projects");
      return { Component: Circa };
    },
  },
  {
    path: siteConfig.subPage.washUp.href,
    async lazy() {
      const { WashUp } = await import("@/pages/projects");
      return { Component: WashUp };
    },
  },
  {
    path: siteConfig.subPage.vpBank.href,
    async lazy() {
      const { VPBank } = await import("@/pages/projects");
      return { Component: VPBank };
    },
  },
  {
    path: siteConfig.subPage.waveB.href,
    async lazy() {
      const { WaveB } = await import("@/pages/projects");
      return { Component: WaveB };
    },
  },
  {
    path: siteConfig.subPage.vng.href,
    async lazy() {
      const { VNG } = await import("@/pages/projects");
      return { Component: VNG };
    },
  },
];

const router = createBrowserRouter([
  {
    path: siteConfig.mainPage.home.href,
    element: <Layout />,
    children: publicRoutes,
  },
  {
    path: siteConfig.mainPage.projects.href,
    element: <LayoutV2 />,
    children: projects,
  },
  {
    path: siteConfig.mainPage.notFound.href,
    element: <NotFound />,
  },
]);

export default router;
