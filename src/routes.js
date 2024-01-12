import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import ProtectedRoute from "./Components/ProtectedRoute";
import Rsvp from "./Components/Rsvp";
import SignIn from "./Components/SignIn";

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
            <Home />
          </Layout>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/accommodation",
        element: (
          <Layout header>
            <Home />
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
