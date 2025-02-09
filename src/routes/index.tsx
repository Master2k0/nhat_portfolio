import { siteConfig } from "@/configs";
import { Layout } from "@/layouts";
import Home from "@/pages/home";
import {
    createBrowserRouter,
    RouteObject
} from "react-router-dom";



const projectHighlightsChildren: RouteObject[] = [
  {
    path: siteConfig.pageList.insuranceFeature.href,
    element: <div>About</div>,
  }
]

const caseStudiesChildren: RouteObject[] = [
  {
    path: '/case-studies/1',
    element: <div>About</div>,
  }
]

const publicRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home/>,
  },
  {
    path: siteConfig.pageList.projectHighlights.href,
    element: <div>About</div>,
    children: projectHighlightsChildren
    
  },
  {
    path: siteConfig.pageList.caseStudies.href,
    element: <div>About</div>,
    children: caseStudiesChildren
  },
  {
    path: siteConfig.pageList.about.href,
    element: <div>About</div>,
  },
  
]

const router = createBrowserRouter([
  {
    path: siteConfig.pageList.home.href,
    element: <Layout/>,
    children: publicRoutes,
  },
  {
    path: siteConfig.pageList.notFound.href,
    element: <div>Not Found</div>,
  }
]);

export default router