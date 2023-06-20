import { lazy } from "react";
import { Outlet, RouteObject } from "react-router";
import RequireAuth from "../components/RequireAuth";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Auth/login"));
const Register = lazy(() => import("../pages/Auth/register"));
const SingleCoursePage = lazy(() => import("../pages/SingleCourse/index"));
const AdminCourses = lazy(() => import("../pages/Admin/Courses"));
const AdminEpisodes = lazy(() => import("../pages/Admin/Episodes"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/course/:id",
    element: <SingleCoursePage />,
  },
  {
    path: "/admin",
    element: (
      <RequireAuth fallback="/login">
        <Outlet />
      </RequireAuth>
    ),
    children: [
      {
        path: "courses",
        element: <AdminCourses />,
      },
      {
        path: "courses/:id",
        element: <AdminEpisodes />,
      },
    ]
  },
];

export default routes;
