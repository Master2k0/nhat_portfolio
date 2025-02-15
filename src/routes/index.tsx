import { siteConfig } from "@/configs";
import { Layout, LayoutProject } from "@/layouts";
import AboutMe from "@/pages/about-me";
import CaseStudies from "@/pages/case-studies";
import Home from "@/pages/home";
import { ProjectHighlight, WashUp } from "@/pages/project-highlight";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const publicRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
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
    path: siteConfig.pageList.notFound.href,
    element: <div>Not Found</div>,
  },
]);

export default router;
