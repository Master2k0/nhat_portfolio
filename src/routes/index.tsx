import { siteConfig } from "@/configs";
import { Layout, LayoutProject } from "@/layouts";
import AboutMe from "@/pages/about-me";
import CaseStudies from "@/pages/case-studies";
import VPBank from "@/pages/case-studies/project/vp-bank/vp-bank";
import WaveB from "@/pages/case-studies/project/waveB/waveB";
// import Home from "@/pages/home";
import HomeNew from "@/pages/home-new";
import { Circa, ProjectHighlight, WashUp } from "@/pages/project-highlight";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const publicRoutes: RouteObject[] = [
  {
    index: true,
    element: <HomeNew />,
  },
  {
    path: siteConfig.pageList.projectHighlights.href,
    element: <ProjectHighlight />,
  },
  {
    path: siteConfig.pageList.caseStudies.href,
    element: <CaseStudies />,
  },
  {
    path: siteConfig.pageList.about.href,
    element: <AboutMe />,
  },
];

const projectRoutes: RouteObject[] = [
  {
    path: siteConfig.pageList.washUp.href,
    element: <WashUp />,
  },
  {
    path: siteConfig.pageList.circa.href,
    element: <Circa />,
  },
];

const caseStudiesRoutes: RouteObject[] = [
  {
    path: siteConfig.pageList.vpBank.href,
    element: <VPBank />,
  },
  {
    path: siteConfig.pageList.waveB.href,
    element: <WaveB />,
  },
];

const router = createBrowserRouter([
  {
    path: siteConfig.pageList.home.href,
    element: <Layout />,
    children: publicRoutes,
  },
  {
    path: siteConfig.pageList.projectHighlights.href,
    element: <LayoutProject />,
    children: projectRoutes,
  },
  {
    path: siteConfig.pageList.caseStudies.href,
    element: <LayoutProject />,
    children: caseStudiesRoutes,
  },
  {
    path: siteConfig.pageList.notFound.href,
    element: <div>Not Found</div>,
  },
]);

export default router;
