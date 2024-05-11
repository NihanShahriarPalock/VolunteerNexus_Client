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
        element: <AddVolunteerPage />,
      },
      {
        path: "/manageMyPost",
        element: <ManageMyPost />,
      },
      {
        path: "/NeedVolunteerPage",
        element: <NeedVolunteerPage />,
      },

      {
        path: "/NeedVolunteer/:id",
        element: <NeedVolunteerDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/NeedVolunteer/${params.id}`),
      },
    ],
  },
]);
