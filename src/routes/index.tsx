import { siteConfig } from "@/configs";
import { Layout } from "@/layouts";
import AboutMe from "@/pages/about-me";
import CaseStudies from "@/pages/case-studies";
import Home from "@/pages/home";
import ProjectHighlight from "@/pages/project-highlight";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const projectHighlightsChildren: RouteObject[] = [
  {
    path: siteConfig.pageList.insuranceFeature.href,
    element: <div>About</div>,
  },
];

const caseStudiesChildren: RouteObject[] = [
  {
    path: "/case-studies/1",
    element: <div>About</div>,
  },
];

const publicRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: siteConfig.pageList.projectHighlights.href,
    element: <ProjectHighlight />,
    children: projectHighlightsChildren,
  },
  {
    path: siteConfig.pageList.caseStudies.href,
    element: <CaseStudies />,
    children: caseStudiesChildren,
  },
  {
    path: siteConfig.pageList.about.href,
    element: <AboutMe />,
  },
];

const router = createBrowserRouter([
  {
    path: siteConfig.pageList.home.href,
    element: <Layout />,
    children: publicRoutes,
  },
  {
    path: siteConfig.pageList.notFound.href,
    element: <div>Not Found</div>,
  },
]);

export default router;
