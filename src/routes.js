import Layout from "components/Layout/Layout";
import Detail from "pages/Detail";
import Home from "pages/Home";

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/campaign/:slug/:id",
        element: <Detail />,
      },
    ],
  },
];

export default routes;
