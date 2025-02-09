import { Layout } from "@/layouts";
import Home from "@/pages/home";
import {
    createBrowserRouter,
    RouteObject
} from "react-router-dom";

const paths = {
  root: '/',
  projectHighlights: '/project-highlights',
  caseStudies: '/case-studies',
  about: '/about',
  washup: '/project-highlights/washup',
  vpBank: '/case-studies/vp-bank',
  notFound: '*',
}

const projectHighlightsChildren: RouteObject[] = [
  {
    path: paths.washup,
    element: <div>About</div>,
  }
]

const caseStudiesChildren: RouteObject[] = [
  {
    path: paths.vpBank,
    element: <div>About</div>,
  }
]

const publicRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home/>,
  },
  {
    path: paths.projectHighlights,
    element: <div>About</div>,
    children: projectHighlightsChildren
    
  },
  {
    path: paths.caseStudies,
    element: <div>About</div>,
    children: caseStudiesChildren
  },
  {
    path: paths.about,
    element: <div>About</div>,
  },
  
]

const router = createBrowserRouter([
  {
    path: paths.root,
    element: <Layout/>,
    children: publicRoutes,
  },
  {
    path: paths.notFound,
    element: <div>Not Found</div>,
  }
]);

export default router