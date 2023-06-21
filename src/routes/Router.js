import { lazy } from "react";
import { Navigate } from "react-router-dom";
import UserDetails from "../views/UserDetails.js";
import TagDetails from "../views/TagDetails.js";
import TagRegister from "../components/TagRegister.js";
import CreateUser from "../components/CreateUser.js";
import UserListDetails from "../components/UserListDetails.js";
import ScanDone from "../components/ScanDone.js";
import Login from "../components/Login.js";
import TagDetailsList from "../components/TagDetailsList.js";
import { getUserType } from "../services/common.js";
import RegisteredTagsDetails from "../components/RegisteredTagsDetails.js";
import ScanQr from "../components/ScanQr.js";
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/
const userType = getUserType();
const ThemeRoutes = [
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "logout",
    element: <Login></Login>,
    //action:
  },
  {
    path: "/",
    element: <FullLayout />,
    children: [
      //{ path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      (userType === "admin" || userType === "superAdmin") && {
        path: "/users",
        exact: true,
        children: [
          { path: "", exact: true, element: <UserDetails /> },
          {
            path: "createUser",
            exact: true,
            element: <CreateUser></CreateUser>,
          },
          {
            path: "details",
            exact: true,
            element: <UserListDetails></UserListDetails>,
          },
        ],
      },

      (userType === "admin" ||
        userType === "superAdmin" ||
        userType === "tagger" ||
        userType === "scanner") && {
        path: "/tags",
        exact: true,
        children: [
          { path: "", element: <TagDetails /> },
          {path:"scanQr",element:<ScanQr></ScanQr>},
          { path: "scan/:tagId", exact: true, element: <ScanDone /> },
          { path: "register/:tagId", exact: true, element: <TagRegister /> },
          { path: "register/:tagId", exact: true, element: <TagRegister /> },
          { path: "registeredInCity/:city", exact: true, element: <RegisteredTagsDetails /> },
          {
            path: "completeDetail",
            exact: true,
            element: <TagDetailsList></TagDetailsList>,
          },
        ],
      },
      // { path: "/alerts", exact: true, element: <Alerts /> },
      // { path: "/badges", exact: true, element: <Badges /> },
      // { path: "/buttons", exact: true, element: <Buttons /> },
      // { path: "/cards", exact: true, element: <Cards /> },
      // { path: "/grid", exact: true, element: <Grid /> },
      // { path: "/table", exact: true, element: <Tables /> },
      // { path: "/forms", exact: true, element: <Forms /> },
      // { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
