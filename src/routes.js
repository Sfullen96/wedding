import Accommodation from "./Components/Accommodation";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import ProtectedRoute from "./Components/ProtectedRoute";
import Rsvp from "./Components/Rsvp";
import SignIn from "./Components/SignIn";
import Venue from "./Components/Venue";
import ViewRsvps from "./Components/ViewRsvps";

const routes = [
  {
    path: "/sign-in",
    element: (
      <Layout header={false}>
        <SignIn />
      </Layout>
    ),
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/admin",
        element: (
          <Layout header>
            <ViewRsvps />
          </Layout>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/",
        element: (
          <Layout header>
            <Home />
          </Layout>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/venue",
        element: (
          <Layout header>
            <Venue />
          </Layout>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/accommodation",
        element: (
          <Layout header>
            <Accommodation />
          </Layout>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/rsvp",
        element: (
          <Layout header>
            <Rsvp />
          </Layout>
        ),
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
