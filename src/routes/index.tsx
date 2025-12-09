import { siteConfig } from "@/configs";
import { Layout } from "@/layouts";
import AboutMeNew from "@/pages/about-me-new";
import HomeNew from "@/pages/home-new";
import NotFound from "@/pages/not-found/not-found";
import { Circa, VPBank, WashUp, WaveB } from "@/pages/projects";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";

const publicRoutes: RouteObject[] = [
  {
    index: true,
    element: <HomeNew />,
  },
  {
    path: siteConfig.mainPage.about.href,
    element: <AboutMeNew />,
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
    element: <Circa />
  },
  {
    path: siteConfig.subPage.washUp.href,
    element: <WashUp />
  },
  {
    path: siteConfig.subPage.vpBank.href,
    element: <VPBank />
  },
  {
    path: siteConfig.subPage.waveB.href,
    element: <WaveB />
  }
]

const router = createBrowserRouter([
  {
    path: siteConfig.mainPage.home.href,
    element: <Layout />,
    children: publicRoutes,
  },
  {
    path: siteConfig.mainPage.projects.href,
    element: <Layout />,
    children: projects,

  },
  {
    path: siteConfig.mainPage.notFound.href,
    element: <NotFound />,
  },
]);

export default router;
