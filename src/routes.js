import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Rsvp from "./Components/Rsvp";

const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/venue",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/accommodation",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/rsvp",
    element: (
      <Layout>
        <Rsvp />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
];

export default routes;
