import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

// import AddVolunteerPage from "../pages/AddVolunteerPage";
import NeedVolunteerDetails from "../pages/NeedVolunteerDetails";
import NeedVolunteerPage from "../pages/NeedVolunteerPage";
import AddVolunteerPage from "../pages/AddVolunteerPage";
import ManageMyPost from "../pages/ManageMyPost";
import NeedVolunteerUpdate from "../pages/NeedVolunteerUpdate";
import BeAVolunteer from "../pages/BeAVolunteer";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: () => fetch(`${import.meta.env.VITE_URL}/volunteerNeeds`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/addVolunteer",
        element: (
          <PrivateRoute>
            <AddVolunteerPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyPost",
        element: (
          <PrivateRoute>
            <ManageMyPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/NeedVolunteerPage",
        element: <NeedVolunteerPage />,
      },

      {
        path: "/NeedVolunteer/:id",
        element: (
          <PrivateRoute>
            <NeedVolunteerDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/NeedVolunteer/${params.id}`),
      },

      {
        path: "/NeedVolunteerUpdate/:id",
        element: (
          <PrivateRoute>
            <NeedVolunteerUpdate />
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`${import.meta.env.VITE_URL}/NeedVolunteerUpdate/${params.id}`),
      },
      {
        path: "/BeAVolunteer/:id",
        element: (
          <PrivateRoute>
            <BeAVolunteer />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/mySinglePost/${params.id}`),
      },
    ],
  },
]);
